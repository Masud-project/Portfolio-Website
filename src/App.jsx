
import "./App.css";
import Img from "./Img.jsx";
import Project from "./Project.jsx"
import Footer from "./Footer.jsx"
import Contact from "./Contact"
import img from "./assets/Screenshot 2026-06-20 183408.png";
function App() {
  return (
    <div>
      <nav className="navbar bg-success d-flex" style={{ width: '100%' }}>
        <h2 className="text-warning">MASUD-FRONTEND DEVELOPER</h2>
        <ul className="nav gap-3 m-0">
          <li><a className="nav-link text-light" href="#about">About</a></li>
          <li><a className="nav-link text-light" href="#skills">Skills</a></li>
          <li><a className="nav-link text-light" href="#projects">Projects</a></li>
          <li><a className="nav-link text-light" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <h1 className="text-center text-light">Welcome to My Portfolio</h1>

      <h4 className="intro text-dark bg-secondary">
        Hey there! I am Masud, a passionate web developer with a love for creating
        beautiful and functional websites.
        
          I specialize in front-end development
          and have experience working with HTML, CSS, JavaScript, Bootstrap,
          Git & GitHub, and React.
          I am always eager to learn new skills and stay
          up-to-date with the latest trends in web development.</h4>
        
      <div className="text-center">
        <img src={img} alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '100%', objectFit: 'cover' }} />
      </div>
      <Img />
      <br></br>
      <Project />
      <br></br>
        <Contact />
        <br></br>
      <Footer />
    
    </div>
  );
}

export default App;
