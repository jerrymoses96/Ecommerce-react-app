import NoMatch from "./components/screens/NoMatch";
import ViewAccomodation from "./components/screens/ViewAccomodation/ViewAccomodation";
import Home from "./components/screens/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewaccomodation" element={<ViewAccomodation />} />
          <Route path="/viewaccomodation/:id" element={<ViewAccomodation />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
