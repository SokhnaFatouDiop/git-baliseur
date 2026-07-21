import { useParams, useNavigate } from "react";
import { supprimerEvenement } from "@senevent/shared";

const Detail = ({ evenements, session }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const evenement = evenements.find((e) => e.id === Number(id));

  if (!evenement) return <p>Événement non trouvé.</p>;

  const handleSupprimer = async () => {
    if (confirm("Voulez-vous vraiment supprimer cet événement ?")) {
      try {
        await supprimerEvenement(evenement.id);
        navigate("/");
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{evenement.titre}</h2>
      <p>{evenement.lieu_nom}</p>
      <p>{evenement.prix} FCFA</p>
      {session && session.user && session.user.id === evenement.organisateur_id && (
        <button onClick={handleSupprimer} style={{ backgroundColor: "red", color: "white" }}>
          Supprimer
        </button>
      )}
    </div>
  );
};

export default Detail;