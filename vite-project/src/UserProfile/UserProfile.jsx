
import user from "./user";

const UserProfile = () => {
 
    


    return (
      <div>
        <h1>{name}</h1>
        {user.hobbies.map((hobby, index) => (
          <p key={index}>{hobby}</p> 
        ))}
        <button
          onClick={() => {
          }}
        >
          Update Profile
        </button>
        <div style={{ color: "red" }}>Red text</div>{" "}
 
      </div>
	  
    );
	
  };
export default UserProfile;
