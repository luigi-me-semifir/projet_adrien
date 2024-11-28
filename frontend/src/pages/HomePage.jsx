import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const HomePage = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    published: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5050/api/tutorials",
        form
      );
      alert("Formation ajoutée avec succès !");
      setForm({ title: "", description: "", published: false });
      navigate(`/tutorials/${data._id}`); // Redirection vers la page des détails
    } catch (err) {
      setErrorMessage(
        "Erreur lors de l'ajout de la formation : " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div>
      <h1>Ajouter une Formation</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Titre :
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Description :
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Publié :
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
          />
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default HomePage;
