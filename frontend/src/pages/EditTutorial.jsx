import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const EditTutorial = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    description: "",
    published: false,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5050/api/tutorials/${id}`
        );
        setForm({
          title: data.title,
          description: data.description,
          published: data.published,
        });
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Erreur lors de la récupération du tutoriel"
        );
      }
    };
    fetchTutorial();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5050/api/tutorials/${id}`, form);
      alert("Tutoriel mis à jour avec succès");
      navigate(`/tutorials/${id}`); // Redirige vers la page des détails après mise à jour
    } catch (err) {
      alert("Erreur lors de la mise à jour : " + err.response?.data?.message);
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre :
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </label>
      <label>
        Description :
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </label>
      <label>
        Publié :
        <input
          type="checkbox"
          checked={form.published}
          onChange={(e) => setForm({ ...form, published: e.target.checked })}
        />
      </label>
      <button type="submit">Mettre à jour</button>
    </form>
  );
};

export default EditTutorial;
