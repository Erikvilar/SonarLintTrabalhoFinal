import user from "./user";
import css from "./UserProfile.module.css";
const UserProfile = () => {
  return (
    <div>
      {user.map((pessoa) => (
        <div key={pessoa.id}  className={css.user}>
          <h1>
            {pessoa.name} gosta de {pessoa.hobby}
          </h1>
          <button>+Veja mais sobre {pessoa.name}</button>
        </div>
      ))}
    </div>
  );
};
export default UserProfile;
