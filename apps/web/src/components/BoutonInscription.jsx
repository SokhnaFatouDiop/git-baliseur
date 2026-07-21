import { useState } from "react";
import { inscrireAEvenement } from "@senevent/shared";

const BoutonInscription = ({ evenementId, userId }) => {
  const [inscrit, setInscrit] = useState(false);
  const [chargement, setChargement] = useState(false);

  const handleInscription = async () => {
    setChargement(true);
    try {
      await inscrireAEvenement(evenementId, userId);
      setInscrit(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setChargement(false);
    }
  };

  return (
    <button onClick={handleInscription} disabled={inscrit || chargement}>
      {chargement ? "Inscription..." : inscrit ? "Inscrit !" : "S'inscrire"}
    </button>
  );
};

export default BoutonInscription;