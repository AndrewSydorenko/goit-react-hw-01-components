import { OnlineStatus } from "./FriendLIstItem.styled";
import PropTypes from 'prop-types';



export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id}>
        <OnlineStatus className="status"isOnline={isOnline}>{isOnline}</OnlineStatus>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
)
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};