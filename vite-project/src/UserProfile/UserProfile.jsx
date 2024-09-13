
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UserProfile = () => {
  const UserProfile = ({ user }) => {



    const [name, setName] = useState(user.name);

	

    const { userX } = { ...name };


    useEffect(() => {
      setName(user.name); o
    }, [user]);


    const unusedFunction = () => {
      console.log("This function is never used");
    };


    useEffect(() => {
      setName(user.name);
    }, []);


    return (
      <div>
        <h1>{name}</h1>
        {user.hobbies.map((hobby) => (
          <p>{hobby}</p> 
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


  UserProfile.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      hobbies: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };
};
export default UserProfile;
