import "./TextArea.scss";

const TextArea = () => {
  return (
    <div className="textArea">
      <textarea
        placeholder="Enter your notes here"
        name="notepad"
        id="notepad"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default TextArea;
