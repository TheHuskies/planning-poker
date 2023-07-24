import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CreateStory } from "./components/Pages/CreateStory";
import { Home } from "./components/Pages/Home";
import { Room } from "./components/Pages/Room";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<CreateStory />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
