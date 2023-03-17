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
  name: PropTypes.string,
  avatar: PropTypes.string,
    isOnline: PropTypes.bool,
  id: PropTypes.number,
}