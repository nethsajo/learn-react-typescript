import { type RootState } from '@/store';
import { formatCurrency } from '@/utils/format-currency';
import { connect } from 'react-redux';

function Balance({ balance }: { balance: number }) {
  return (
    <div className="rounded-md bg-zinc-100 px-4 py-2 text-lg font-bold text-indigo-500 sm:ml-auto">
      {formatCurrency(balance)}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    balance: state.account.balance,
  };
};

export default connect(mapStateToProps)(Balance);
