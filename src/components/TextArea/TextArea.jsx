import "./TextArea.scss";

const TextArea = () => {
  return (
    <textarea
      className="textArea"
      placeholder="Enter your notes here"
      name="notepad"
      id="notepad"
      cols="50"
      rows="10"
    ></textarea>
  );
};

export default TextArea;
