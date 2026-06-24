import vscode from "./assets/Screenshot 2026-06-23 104011.png"
import html from "./assets/Screenshot 2026-06-23 111344.png"
import css from "./assets/Screenshot 2026-06-23 103904.png"
import js from "./assets/Screenshot 2026-06-23 103835.png"
import bootstrap from "./assets/Screenshot 2026-06-23 103927.png"
import git from "./assets/Screenshot 2026-06-23 113002.png"
import github from "./assets/Screenshot 2026-06-23 104034.png"
import react from "./assets/Screenshot 2026-06-23 103951.png"
function Img() {
  return (
    <div className="toolbar">
      <div className="group d-flex flex-wrap gap-3 justify-content-center">

        {/* Card 1 */}
        <div
          className="Card Card1 bg-secondary text-warning p-3"
          style={{ width: "18rem", borderRadius: "60px" }}
        >
          <div className="card-body text-center">
            <h1 className="card-title fw-bold">About myself</h1>
            <p className="card-text">Frontend Web Developer</p>
            <h2>Expert in Creating Beautiful Modern Websites</h2>
            <p>E-commerce Websites, Business Websites</p>
            <p>I can make Landing Pages</p>
            <p>Expert in responsive design</p>
            <p>Expert in restaurant websites</p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="Card Card2 bg-secondary text-warning p-3"
          style={{ width: "18rem", borderRadius: "60px" }}
        >
          <div className="card-body text-center">
            <marquee direction="left">MD MASUD RANA-REACT DEVELOPER/ FRONTEND DEVELOPER</marquee>
            <p>Now I am studying at Rangpur Govt Polytechnic Institute.</p>
            <p>Department of Computer Science and Technology</p>
            <p>Still learning full stack Web developmant</p>
            <p> I have experience of Frontend Project Work</p>
          </div>
        </div>
        </div>
        <br></br>
        {/* Card 3 */}
           <div>
                 <div className="Card bg-secondary text-warning p-3  d-flex flex-wrap gap-3 justify-content-center" style={{width:"100%" ,borderRadius: "50px"}}>
               <h2>My Skills:</h2>
               <br></br>
               <h3>I am expert on HTML, CSS, JAVASCRIPT, BOOTSTRAP, GIT & GITHUB and REACT</h3>
               <div className="skills-container d-flex flex-wrap gap-3 align-items-center justify-content-center">
                 <div className="skill">
                   <img src={vscode} alt="VS Code" style={{ width: '80px', height: '80px' }} />
                 </div>
                 <div className="skill">
                   <img src={html} alt="HTML" style={{ width: '80px', height: '80px' }} />
                 </div>
                 <div className="skill">
                   <img src={css} alt="CSS" style={{ width: '80px', height: '80px' }} />
                 </div>
                 <div className="skill">
                   <img src={js} alt="JavaScript" style={{ width: '80px', height: '80px' }} />
                 </div>
                 <div className="skill">
                   <img src={bootstrap} alt="Bootstrap" style={{ width: '80px', height: '80px' }} />
                 </div>
                 <div className="skill">
                   <img src={git} alt="Git" style={{ width: '80px', height: '80px' }} />
                 </div>
                 <div className="skill">
                   <img src={github} alt="GitHub" style={{ width: '80px', height: '80px' }} />
                 </div>
                 <div className="skill"> 
                   <img src={react} alt="React" style={{ width: '80px', height: '80px' }} />
               </div>
               </div>
             </div>

      </div>
    </div>
  );
}

export default Img;