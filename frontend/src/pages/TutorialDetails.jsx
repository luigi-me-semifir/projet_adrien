import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./TutorialDetails.css";

const TutorialDetails = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5050/api/tutorials/${id}`
        );
        setTutorial(data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Erreur lors de la récupération du tutoriel"
        );
      }
    };
    fetchTutorial();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5050/api/tutorials/${id}`);
      alert("Tutoriel supprimé avec succès !");
      navigate("/");
    } catch (err) {
      alert(
        "Erreur lors de la suppression : " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  const handleEdit = () => {
    navigate(`/tutorials/${id}/edit`);
  };

  if (error) return <div>{error}</div>;

  if (!tutorial) return <div>Chargement...</div>;

  return (
    <div>
      <div className="details-container">
        <div className="details-card">
          <h1>{tutorial.title}</h1>
          <p>{tutorial.description}</p>
          <p>{tutorial.published ? "Publié" : "Brouillon"}</p>
          <div className="details-buttons">
            <button onClick={handleEdit}>Modifier</button>
            <button onClick={handleDelete}>Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetails;
