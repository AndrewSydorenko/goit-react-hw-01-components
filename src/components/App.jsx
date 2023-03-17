import { Profile } from './Profile/Profile'
import { FriendList } from './Friends/FriendList';
import friends from '../Constants/friends.json';
// import user from '../Constants/user.json'
export const App = () => {
  return (
    <div>
      <Profile />
      <FriendList friends={friends} />
    </div>
  );
}


