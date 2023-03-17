import { Profile } from './profile/Profile'
import user from '../constants/user.json';
import { Statistics } from './statistics/Statistics';
import data from '../constants/data.json';
import { FriendList } from './friends/FriendList';
import friends from '../constants/friends.json';
import { TransactionsHistory } from './transactions/TransactionHistory';
import transactions from '../constants/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionsHistory items={transactions} />
      <FriendList friends={friends} />
    </div>
  );
}


