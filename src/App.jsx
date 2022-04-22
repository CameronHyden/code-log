import { useState, useEffect } from "react";
import CodeCardContainer from "./components/CodeCardContainer/CodeCardContainer";
import LogInput from "./components/LogInput/LogInput";
import "./App.css";
import DeleteField from "./components/DeleteField/DeleteField";
import { addNewLog, deleteById, fetchCodeLogs } from "./api.js";

const App = () => {
  const [codeEntry, setCodeEntry] = useState([]);
  const [idText, setIdText] = useState("");
  const [input, setInput] = useState({
    title: "",
    problemImage: "",
    summary: "",
    solutionImage: "",
    solutionSummary: "",
  });

  useEffect(() => {
    handleFetch();
  }, []);

  const handleInput = (event) => {
    const value = event.target.value;
    setInput({
      ...input,
      [event.target.name]: value,
    });
  };

  const handleIdText = (event) => {
    const input = event.target.value;
    setIdText(input);
  };

  const handleAddNewLog = async () => {
    await addNewLog(input);
    handleFetch();
  };

  const handleDeleteById = async () => {
    await deleteById(idText);
    handleFetch();
  };

  const handleFetch = () => {
    (async () => {
      const data = await fetchCodeLogs();
      setCodeEntry(data);
    })();
  };

  return (
    <div className="App">
      <CodeCardContainer codeEntry={codeEntry} />
      <LogInput
        handleInput={handleInput}
        saveButton={handleAddNewLog}
        state={input}
      />
      <DeleteField handleIdText={handleIdText} deleteById={handleDeleteById} />
    </div>
  );
};

export default App;
