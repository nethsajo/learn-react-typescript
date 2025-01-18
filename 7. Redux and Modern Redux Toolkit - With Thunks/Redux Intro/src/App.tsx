import { useState } from 'react';
import { Button } from './components/ui/button';
import Balance from './features/accounts/components/balance';
import { Deposit } from './features/accounts/components/deposit';
import { Loan } from './features/accounts/components/loan';
import { Transaction } from './features/accounts/components/transaction';
import { Withdraw } from './features/accounts/components/withdraw';
import { payLoan } from './features/accounts/slice/account';
import { AddCustomerForm } from './features/customers/components/add-customer-form';
import { Customer } from './features/customers/components/customer';
import { useAppDispatch, useAppSelector } from './store';

export default function App() {
  const [transaction, setTransaction] = useState('deposit');
  const customer = useAppSelector(state => state.customer.full_name);
  const dispatch = useAppDispatch();
  const { loan, loanPurpose } = useAppSelector(state => state.account);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col space-y-6">
      <h1 className="text-center text-2xl font-bold text-zinc-800 sm:text-3xl md:text-4xl">
        The React-Redux Bank
      </h1>
      {customer === '' ? (
        <AddCustomerForm />
      ) : (
        <>
          <hr />
          <Transaction transaction={transaction} setTransaction={setTransaction} />
          <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0">
            <Customer />
            <Balance />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold capitalize text-zinc-800">{transaction}</h2>
              {transaction === 'loan' && loan > 0 && (
                <Button
                  variant="destructive"
                  className="ml-auto"
                  onClick={() => dispatch(payLoan())}
                >
                  Pay back ${loan} ({loanPurpose})
                </Button>
              )}
            </div>
            {transaction === 'deposit' && <Deposit />}
            {transaction === 'withdraw' && <Withdraw />}
            {transaction === 'loan' && <Loan />}
          </div>
        </>
      )}
    </div>
  );
}
