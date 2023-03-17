



export const FriendList = ({ friends } ) =>
<ul className="friend-list">
    {friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
))}
</ul>