import { Link } from "react-router-dom";
import { seDeconnecter } from "@senevent/shared";

const NavBar = ({ session }) => {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>
      <Link to="/">Accueil</Link>
      {session ? (
        <>
          <Link to="/nouveau">Nouveau</Link>
          <button onClick={seDeconnecter}>Déconnexion</button>
        </>
      ) : (
        <Link to="/auth">Connexion</Link>
      )}
    </nav>
  );
};

export default NavBar;