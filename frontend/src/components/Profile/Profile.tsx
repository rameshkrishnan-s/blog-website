import "./Profile.css";
import profile from '../../assets/profile.webp';
import Button from "@mui/material/Button";

const Profile = () => {
  return (
    <div className=" flex flex-col items-center justify-center p-52">
        <div className="bg-red-50 items-center justify-center flex flex-col p-4 rounded-lg shadow-lg">
        <img src={profile} alt="" id='profile-img'/>
        <p>This is the profile page</p>
        <div>
        <Button variant="contained">Click Me</Button>
        </div>
        </div>

        
      

    </div>
  )
}

export default Profile
