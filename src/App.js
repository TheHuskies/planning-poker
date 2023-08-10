import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CreateStory } from "./components/Pages/CreateStory";
import { Home } from "./components/Pages/Home";
import { Room } from "./components/Pages/Room";
import { RoomProvider } from "./components/Context/RoomContext";
import { StoryProvider } from "./components/Context/StoryContext";

function App() {
  return (
    <div className="App">
      <RoomProvider>
        <StoryProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<CreateStory />} />
              <Route path="/room/:id" element={<Room />} />
            </Routes>
          </Router>
        </StoryProvider>
      </RoomProvider>
    </div>
  );
}

export default App;
