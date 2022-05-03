import "./ResourcesSection.scss";

const ResourcesSection = () => {
  return (
    <div className="resourcesSection">
      <div className="resourcesSection__header">
        <h3>RESOURCES</h3>
      </div>
      <div>
        <ul className="resourcesSection__links">
          <li>
            <a
              className="resourcesSection__link"
              href="https://docs.emmet.io/cheat-sheet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emmet cheat sheet
            </a>
          </li>

          <li>
            <a
              className="resourcesSection__link"
              href="https://education.github.com/git-cheat-sheet-education.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git cheat sheet
            </a>
          </li>
          <li>
            <a
              className="resourcesSection__link"
              href="https://devhints.io/sass"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sass cheat sheet
            </a>
          </li>
          <li>
            <a
              className="resourcesSection__link"
              href="https://htmlcheatsheet.com/css/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS cheat sheet
            </a>
          </li>
          <li>
            <a
              className="resourcesSection__link"
              href="https://websitesetup.org/javascript-cheat-sheet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript cheat sheet
            </a>
          </li>
          <li>
            <a
              className="resourcesSection__link"
              href="https://devhints.io/react"
              target="_blank"
              rel="noopener noreferrer"
            >
              React cheat sheet
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesSection;
