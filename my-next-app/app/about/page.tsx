import cssStyle from "./about.module.css"; // Ensure this path is correct
import Header from "./components/Header/header"; // Ensure this path is correct

console.log(cssStyle, "CSS-Style");

function AboutPage() {
  return (<div>
    <header><h1>This is header</h1></header>

    

    <h2 className={cssStyle.pink}>This Is About Me</h2>
    <footer></footer>
    </div>
  );
}

export default AboutPage;

