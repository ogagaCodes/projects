import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
      <div className="header">
      <h1 className="name">Ogaga Adjaro</h1>
      <p className="subtitle">
        Experienced Senior Software Engineer and Architect with over 10 years of experience.
      </p>
      <p className="contact">
        No 14 Greenville Estate, Ajah, Lagos 100001<br />
        <a href="tel:+2348162968926">(234) 8162968926</a> | <a href="mailto:ogagaadjaro@gmail.com">ogagaadjaro@gmail.com</a>
      </p>
    </div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    </header>

);

export default Header;