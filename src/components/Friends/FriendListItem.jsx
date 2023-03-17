



export const FriendListItem = (id, avatar, name, isOnline) => {
     const onlineSvg = "https://icons8.com/icon/FkQHNSmqWQWH/green-circle";
    const offlineSvg = "https://icons8.com/icon/Zyo5wDjgJxRW/red-circle";
    <li id={id}>
        {{isOnline} ? onlineSvg : offlineSvg}
        <span class="status">{isOnline}</span>
        <img class={avatar} src="" alt="User avatar" width="48" />
  <p class={name}></p>
</li>
}