import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/index";
import RouterList from "./assets/layout/config_routers";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <RouterList />
    </Router>
  );
}

export default App;
