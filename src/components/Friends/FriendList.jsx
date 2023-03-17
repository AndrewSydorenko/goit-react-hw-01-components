



export const FriendList = ({ friends } ) => {
   console.log(friends);
<ul class="friend-list">
    {friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
))}
</ul>
}