import { useState, useEffect } from "react";
import CodeCardContainer from "./components/CodeCardContainer/CodeCardContainer";
import LogInput from "./components/LogInput/LogInput";
import "./App.scss";
import { addNewLog, deleteById, fetchCodeLogs } from "./api.js";
import NavBar from "./components/NavBar/NavBar";
import TextArea from "./components/TextArea/TextArea";
import ResourcesSection from "./components/ResourcesSection/ResourcesSection";

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

  const handleDeleteById = async () => {
    await deleteById(idText);
    handleFetch();
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

  const handleFetch = () => {
    (async () => {
      const data = await fetchCodeLogs();
      setCodeEntry(data);
    })();
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
      <NavBar
        handleDeleteById={handleDeleteById}
        handleIdText={handleIdText}
        setAddSection={setAddSection}
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
      <CodeCardContainer codeEntry={codeEntry} />
      <div className="footer">
        <TextArea />
        <ResourcesSection />
      </div>
    </div>
  );
};

export default App;
