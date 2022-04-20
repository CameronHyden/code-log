import { useState, useEffect } from "react";
import CodeCardContainer from "./components/CodeCardContainer/CodeCardContainer";
import LogInput from "./components/LogInput/LogInput";
import "./App.css";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState([]);

  const url = "http://localhost:8080/codeLogAll";

  const fetchCodeLogs = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLogs(data);
    console.log(data);
  };
  useEffect(() => {
    fetchCodeLogs();
  }, []);

  const handleInput = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  return (
    <div className="App">
      <CodeCardContainer codeLog={logs} />
      {/* <button>ADD</button> */}
      <LogInput handleInput={handleInput} />
    </div>
  );
};

export default App;
