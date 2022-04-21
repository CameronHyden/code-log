import { useState, useEffect } from "react";
import CodeCardContainer from "./components/CodeCardContainer/CodeCardContainer";
import LogInput from "./components/LogInput/LogInput";
import "./App.css";
import DeleteField from "./components/DeleteField/DeleteField";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [idText, setIdText] = useState("");
  const [input, setInput] = useState({
    title: "",
    problemImage: "",
    summary: "",
    solutionImage: "",
    solutionSummary: "",
  });

  const url = "https://my-code-solution-tracker.ey.r.appspot.com/codeLog";

  const fetchCodeLogs = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLogs(data);
  };

  useEffect(() => {
    fetchCodeLogs(input, idText);
  }, [input, idText]);

  const handleInput = (event) => {
    const value = event.target.value;
    setInput({
      ...input,
      [event.target.name]: value,
    });
  };
  const addNewLog = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    });
  };
  const handleIdText = (event) => {
    const input = event.target.value;
    setIdText(input);
  };
  const deleteById = () => {
    fetch(url + "/" + idText, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }).then((response) => response.text());
  };

  return (
    <div className="App">
      <CodeCardContainer codeLog={logs} />
      <LogInput
        handleInput={handleInput}
        saveButton={addNewLog}
        state={input}
      />
      <DeleteField handleIdText={handleIdText} deleteById={deleteById} />
    </div>
  );
};

export default App;
