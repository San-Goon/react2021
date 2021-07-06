import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "antd";
import { BarChartOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <BarChartOutlined />
        </p>
        <Calendar fullscreen={false} />
      </header>
    </div>
  );
}

export default App;
