import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <body>
      <div class="grid-2">
        <div class="section-1">
          <img src="../public/profile.phto.jpeg" alt="boohoo" />
          <i class="fas fa-code fa-5x white"></i>
          <h2>Igneri Illa</h2>
          <p>Austin,Texas.</p>

          <a href="https://github.com/">
            <i class="Iggy420"></i>
          </a>
        </div>
        <div class="section-2">
          <h2>About</h2>
          <p>
            I currently taking University of Texas six month CodingBootcamp. I
            am making the transition as a fullstack develoer and hope to become
            efficient In both fron-end and back-end responsabilities in the tech
            industry. Coding has alway beee and intrest of mine since I moved to
            Austin seven years ago. To be ablke to create not only fully
            functioning websites but also stable phone application. The internet
            is becoming ever more interacting and developing the technology
            behind this sort of interaction is a goal of mine.
          </p>
          <h2>Skills</h2>
          <p>
            During my Boot camp I have learned JavaScript, React, Next.js, SQL,
            Mongodb, node.js amongs touching bases with numerous other
            frameworks
          </p>
          <h2>Projects</h2>
          <a href="https://github.com/Iggy420/Code-Stars-">NBA Scores</a>
          <a href="https://github.com/riceandrew/Project2">Brewery Crawl</a>

          <h2>Contact</h2>
          <p>igneriilla@gmail.com</p>
        </div>
      </div>
    </body>
  );
}

export default App;
