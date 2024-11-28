import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TutorialDetails from "./pages/TutorialDetails";
import EditTutorial from "./pages/EditTutorial";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Search />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorials/:id" element={<TutorialDetails />} />
          <Route path="/tutorials/:id/edit" element={<EditTutorial />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
