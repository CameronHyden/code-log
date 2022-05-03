import "./TextArea.scss";

const TextArea = () => {
  return (
    <div>
      <textarea
        className="textArea"
        placeholder="Enter your notes here"
        name="notepad"
        id="notepad"
        cols="50"
        rows="10"
      ></textarea>
    </div>
  );
};

export default TextArea;
