import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header>
      <button onClick={goToHome}>Accueil</button>
    </header>
  );
};

export default Header;
