// import PropTypes from 'prop-types';



export const Profile = ({ username, tag, location, avatar, stats }) => {
    
    const UserStates = [
    { label: 'Followers', quantity: stats.followers },
    { label: 'Views', quantity: stats.views },
    { label: 'Likes', quantity: stats.likes }];
    
    return (
        <div class="profile">
            <div class="description">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                    class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>
            <ul class="stats">
                {UserStates.map(({ label, quantity }) =>
                    <li key={label}>
                        <span class="label">{label}</span>
                        <span class="quantity">{quantity}</span>
                    </li>
                )
                }
            </ul>
        </div>
    );
};

// Profile.PropTypes = {
//     username: PropTypes.string.isRequired,
// };