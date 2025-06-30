import "./index.css"

const ProfileConstants=[{id:"wishlist",name:"Wishlist"}]

const Profile=()=><div className="profile-container">
    <div className="profile-photo-container">
            <img src="https://tse1.mm.bing.net/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain" alt="profile" className="profile-image" />
            <h1 className="profile-name">Venkata Siva Giridhar Kumar Somesula</h1>
    </div>
    <ul className="profile-list-container">{
        
        }</ul>
    <button className="logout-button">Logout</button>
</div>

 
export default Profile    