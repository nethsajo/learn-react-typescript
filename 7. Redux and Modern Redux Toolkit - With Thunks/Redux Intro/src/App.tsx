import { useState } from 'react';
import { Balance } from './features/accounts/components/balance';
import { Deposit } from './features/accounts/components/deposit';
import { RequestLoan } from './features/accounts/components/request-loan';
import { Transaction } from './features/accounts/components/transaction';
import { Withdraw } from './features/accounts/components/withdraw';
import { AddCustomerForm } from './features/customers/components/add-customer-form';
import { Customer } from './features/customers/components/customer';

export default function App() {
  const [transaction, setTransaction] = useState('deposit');

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col space-y-6">
      <h1 className="text-center text-2xl font-bold text-zinc-800 sm:text-3xl md:text-4xl">
        The React-Redux Bank
      </h1>
      <AddCustomerForm />
      <hr />
      <Transaction transaction={transaction} setTransaction={setTransaction} />
      <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0">
        <Customer />
        <Balance />
      </div>
      {/* <AddCustomerForm /> */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold capitalize text-zinc-800">{transaction}</h2>
        {transaction === 'deposit' && <Deposit />}
        {transaction === 'withdraw' && <Withdraw />}
        {transaction === 'loan' && <RequestLoan />}
      </div>
    </div>
  );
}
