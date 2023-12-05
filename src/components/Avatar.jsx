import { useLocation } from "react-router-dom";

function Avatar({ url, size, avatar_url }) {

const location = useLocation();
const { updatedProfile, avatarUrl } = location.state || {};

console.log(avatarUrl);


  return (
    <>
   
        <img
          src={
            avatarUrl || avatar_url
          } /* Utilizza 'url' se è definito, altrimenti 'avatarUrl' */
          alt="Avatar"
          className="avatar"
          style={{
            height: size,
            width: size,
            borderRadius: '50%'
          }}
        />
      
    </>
  );
}

export default Avatar;
