import { useState, useEffect } from "react";
import CodeCardContainer from "./components/CodeCardContainer/CodeCardContainer";
import LogInput from "./components/LogInput/LogInput";
import "./App.scss";
import { addNewLog, deleteById, fetchCodeLogs } from "./api.js";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout /Layout";

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

  const [clockHands, setClockHands] = useState({
    secondHand: 0,
    minuteHand: 0,
    hourHand: 0,
  });

  const setTime = () => {
    const currentDate = new Date();
    let second = currentDate.getSeconds() / 60;
    let minute = (second + currentDate.getMinutes()) / 60;
    let hour = (minute + currentDate.getHours()) / 12;

    setClockHands((prevState) => {
      let clonedClockHands = { ...prevState.clonedClockHands };
      clonedClockHands.secondHand = second;
      clonedClockHands.minuteHand = minute;
      clonedClockHands.hourHand = hour;
      return clonedClockHands;
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime();
    }, 1000);
  });

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

  const handleFetch = async () => {
    const data = await fetchCodeLogs();
    setCodeEntry(data);
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
    <Layout>
      <NavBar
        handleDeleteById={handleDeleteById}
        handleIdText={handleIdText}
        setAddSection={setAddSection}
        secondHand={clockHands.secondHand}
        minuteHand={clockHands.minuteHand}
        hourHand={clockHands.hourHand}
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
      <Footer />
    </Layout>
  );
};

export default App;
