import { Profile } from './Profile/Profile'
import user from '../Constants/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../Constants/data.json';
import { FriendList } from './Friends/FriendList';
import friends from '../Constants/friends.json';
import { TransactionsHistory } from './Transactions/TransactionHistory';
import  transactions   from '../Constants/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics {...data} />
      <TransactionsHistory {...transactions} />
      <FriendList friends={friends} />
    </div>
  );
}


