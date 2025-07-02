import './ProfileCard.css';

function ProfileCard(props) {
    const { name, image, description, socialNetworks } = props;
    
    return (<div className="profile-card">
        <img src={image} alt={image} className="profile-image" />
        <div className="profile-content">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-description">{description}</p>
            <div className="profile-socials">
                <a href={socialNetworks.linkedin} target="_blank" rel="noreferrer" >LinkedIn</a>
                <a href={socialNetworks.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
    </div>);
}

export default ProfileCard;