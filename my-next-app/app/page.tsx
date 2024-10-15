import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Hero  from "./components/Hero/hero";

//import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <div>
       <Header></Header>
        <Footer></Footer>
        <Hero></Hero>
        <nav>
          
          <li style={{ color: "purple",background: "pink" }}>
        
  Home
</li>

          <h1 className = "pink">HomePage</h1>
<h2 className="purple">this is homepage</h2>
        </nav>
      </div>
      <div>
        Welcome To My HomePage;
      </div>
    </div> // Ensure this closing tag is here
  );
}
