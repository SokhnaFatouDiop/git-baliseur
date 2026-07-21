import { useParams, useNavigate } from "react-router-dom";
import { supprimerEvenement } from "@senevent/shared";

const Detail = ({ evenements, session }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sécurité au cas où la liste est en cours de chargement
  if (!evenements || evenements.length === 0) {
    return <div style={{ padding: "20px" }}>Chargement de l'événement...</div>;
  }

  const evenement = evenements.find((e) => e.id === Number(id));

  if (!evenement) {
    return <div style={{ padding: "20px" }}>Événement introuvable.</div>;
  }

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
      <p><strong>Catégorie :</strong> {evenement.categorie}</p>
      <p><strong>Lieu :</strong> {evenement.lieu_nom}</p>
      <p><strong>Prix :</strong> {evenement.prix} FCFA</p>
      
      {evenement.image_url && (
        <img src={evenement.image_url} alt={evenement.titre} style={{ maxWidth: "300px", borderRadius: "8px" }} />
      )}

      {/* Verification securisee de la session avant d'afficher le bouton supprimer */}
      {session && session.user && session.user.id === evenement.organisateur_id && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleSupprimer} style={{ backgroundColor: "red", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Supprimer l'événement
          </button>
        </div>
      )}
    </div>
  );
};

export default Detail;