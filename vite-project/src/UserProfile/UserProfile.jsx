
import user from "./user";

const UserProfile = () => {
 
    


    return (

      <div>
		{user.map((pessoa)=>(
		<div>
        <h1>{pessoa.name}</h1>
		</div>
	))}

      </div>
	  
    );
	
  };
export default UserProfile;
