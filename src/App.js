import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CreateStory } from "./components/Pages/CreateStory";
import { Home } from "./components/Pages/Home";
import { Room } from "./components/Pages/Room";
import { RoomProvider } from "./components/Context/RoomContext";

function App() {
  return (
    <div className="App">
      <RoomProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<CreateStory />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </Router>
      </RoomProvider>
    </div>
  );
}

export default App;
