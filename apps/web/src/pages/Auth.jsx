import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { seConnecter, sInscrire } from "@senevent/shared";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur(null);
    try {
      if (isSignUp) {
        await sInscrire(email, password);
      } else {
        await seConnecter(email, password);
      }
      navigate("/");
    } catch (err) {
      setErreur(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{isSignUp ? "Inscription" : "Connexion"}</h2>
      {erreur && <p style={{ color: "red" }}>{erreur}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">{isSignUp ? "S'inscrire" : "Se connecter"}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Déjà un compte ? Se connecter" : "Pas de compte ? S'inscrire"}
      </button>
    </div>
  );
};

export default Auth;