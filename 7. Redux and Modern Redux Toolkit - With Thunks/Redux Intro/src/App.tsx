import { useState } from 'react';
import { Deposit } from './features/accounts/components/deposit';
import { RequestLoan } from './features/accounts/components/request-loan';
import { Transaction } from './features/accounts/components/transaction';
import { Withdraw } from './features/accounts/components/withdraw';
import { Customer } from './features/customers/components/customer';

export default function App() {
  const [transaction, setTransaction] = useState('deposit');

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col space-y-6">
      <h1 className="text-center text-2xl font-bold text-zinc-800 sm:text-3xl md:text-4xl">
        The React-Redux Bank
      </h1>
      <Transaction transaction={transaction} setTransaction={setTransaction} />
      <Customer />
      {/* <AddCustomerForm /> */}
      {transaction === 'deposit' && <Deposit />}
      {transaction === 'withdraw' && <Withdraw />}
      {transaction === 'loan' && <RequestLoan />}
    </div>
  );
}
