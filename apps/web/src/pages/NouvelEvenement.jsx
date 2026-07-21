import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { creerEvenement, getSupabase } from "@senevent/shared";

const NouvelEvenement = ({ onAjoutReussi }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    titre: "",
    categorie: "concert",
    lieu_nom: "",
    date_debut: "",
    prix: 0,
    image_url: "",
  });
  const [erreur, setErreur] = useState(null);
  const [chargement, setChargement] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChargement(true);
    setErreur(null);

    try {
      const { data: { user } } = await getSupabase().auth.getUser();
      if (!user) throw new Error("Vous devez être connecté.");

      await creerEvenement({
        ...form,
        prix: Number(form.prix),
        organisateur_id: user.id,
      });

      if (onAjoutReussi) onAjoutReussi();
      navigate("/");
    } catch (err) {
      setErreur(err.message);
    } finally {
      setChargement(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Créer un événement</h2>
      {erreur && <p style={{ color: "red" }}>{erreur}</p>}
      <form onSubmit={handleSubmit}>
        <input name="titre" placeholder="Titre" onChange={handleChange} required />
        <input name="lieu_nom" placeholder="Lieu" onChange={handleChange} required />
        <input name="date_debut" type="datetime-local" onChange={handleChange} required />
        <input name="prix" type="number" placeholder="Prix" onChange={handleChange} required />
        <input name="image_url" placeholder="URL Image" onChange={handleChange} />
        <button type="submit" disabled={chargement}>
          {chargement ? "Création..." : "Créer"}
        </button>
      </form>
    </div>
  );
};

export default NouvelEvenement;