import "antd/dist/antd.min.css";
import { Header } from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
