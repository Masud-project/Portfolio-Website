import vscode from "./assets/Screenshot 2026-06-23 104011.png"
import html from "./assets/Screenshot 2026-06-23 111344.png"
import css from "./assets/Screenshot 2026-06-23 103904.png"
import js from "./assets/Screenshot 2026-06-23 103835.png"
import bootstrap from "./assets/Screenshot 2026-06-23 103927.png"
import git from "./assets/Screenshot 2026-06-23 113002.png"
import github from "./assets/Screenshot 2026-06-23 104034.png"
import react from "./assets/Screenshot 2026-06-23 103951.png"
function Skills() {
  return (
      <div>
        <div className="Card bg-secondary p-3  d-flex flex-wrap gap-3 justify-content-center" style={{width:"18rem" ,borderRadius: "50px"}}>
      <h2>My Skills</h2>
      <h3>I am expert on HTML, CSS, JAVASCRIPT, BOOTSTRAP, GIT & GITHUB and REACT</h3>
      <div className="skills-container d-flex flex-wrap gap-3 align-items-center justify-content-center">
        <div className="skill">
          <img src={vscode} alt="VS Code" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="skill">
          <img src={html} alt="HTML" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="skill">
          <img src={css} alt="CSS" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="skill">
          <img src={js} alt="JavaScript" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="skill">
          <img src={bootstrap} alt="Bootstrap" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="skill">
          <img src={git} alt="Git" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="skill">
          <img src={github} alt="GitHub" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="skill"> 
          <img src={react} alt="React" style={{ width: '50px', height: '50px' }} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Skills;