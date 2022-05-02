import { useState, useEffect } from "react";
import CodeCardContainer from "./components/CodeCardContainer/CodeCardContainer";
import LogInput from "./components/LogInput/LogInput";
import "./App.scss";
import DeleteField from "./components/DeleteField/DeleteField";
import { addNewLog, deleteById, fetchCodeLogs } from "./api.js";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [addSection, setAddSection] = useState(false);
  const [codeEntry, setCodeEntry] = useState([]);
  const [idText, setIdText] = useState("");
  const [input, setInput] = useState({
    title: "",
    problemImage: "",
    summary: "",
    solutionImage: "",
    solutionSummary: "",
  });
  // const [image, setImage] = useState("");

  useEffect(() => {
    handleFetch(codeEntry);
  }, [codeEntry]);

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
    console.log(input);
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

  const renderAddSection = () => {
    setAddSection(true);
  };
  const closeAddSection = () => {
    setAddSection(false);
  };

  const onImageChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.onloadend = function () {
      const result = reader.result;
      setInput((prevState) => {
        let clonedState = { ...prevState.input };
        input.problemImage = result;
        setInput(clonedState);
        console.log(input);
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="app">
      <div className="app__userModifiers">
        <NavBar />
        <Button
          handleAddSectionState={renderAddSection}
          buttonText="ADD"
          buttonName="button"
          labelName="button"
          labelText="Log your code"
        />
        {addSection && (
          <LogInput
            handleInput={handleInput}
            saveButton={handleAddNewLog}
            state={input}
            handleAddSectionState={closeAddSection}
            onImageChange={onImageChange}
          />
        )}
        <DeleteField
          handleIdText={handleIdText}
          deleteById={handleDeleteById}
        />
      </div>
      <CodeCardContainer codeEntry={codeEntry} />
    </div>
  );
};

export default App;
