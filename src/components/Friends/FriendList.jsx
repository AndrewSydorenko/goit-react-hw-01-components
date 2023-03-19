import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem';


export const FriendList = ({ friends }) => {
    return (
      <ul className={css.list}>
        {friends.map(({ id, avatar, name, isOnline }) =>
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />)}
</ul>
    )
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};