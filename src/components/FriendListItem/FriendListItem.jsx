import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            <img className={s.avatar} src={avatar} alt={name} />
            <span className={s.name}>{name}</span>
            <p className={`${s.status} ${isOnline ? s.online : s.offline}`}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </li>
    );
};

export default FriendListItem;