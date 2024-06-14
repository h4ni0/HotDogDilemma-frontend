import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Answers from "./pages/Answers";
import AnswerForm from "./pages/AnswerForm";

const App = (): JSX.Element => {
  return (
    <Router>
      <Nav />
      <div className="max-w-7xl mx-auto my-12">
        <Routes>
          <Route path="/" element={<Answers />} />
          <Route path="/add-new" element={<AnswerForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
