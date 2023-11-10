import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import UDLOGO from "../src/UDPrimaryLogo2945.png";
import UDMonolog from "../src/UDMonogramC.jpg";
import {WelcomeModal} from "./Components/WelcomeModal";
import { initialSemester } from "./Data/InitialSemester"
import { SemesterTable } from './Components/SemesterTable';
import { AutoComplete } from './Components/AutoComplete';


function App(): JSX.Element {
  return (
    <div className="App">
        <div className="header">
            <header>
                <div id="staticbar">
                    <img id="UDlogo" src={UDLOGO}></img>
                    <div className="alignplanviewleft">
                    </div>
                    <div className="alignnewplanright-group">
                      <WelcomeModal></WelcomeModal>
                    </div>
                </div>
                <div id="main">
                    <div className="mainalignleft">
                        
                    </div>
                    <div className="mainaligncenter">
                        <h1>
                            Department of Computer Science Advisement Tool
                        </h1>
                        <div className="div2">
                            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        </div>
                        <span>
                        <AutoComplete></AutoComplete>
                        <SemesterTable initialSemesters={initialSemester}></SemesterTable>
                        {/*Welcome to the Advising Tool! This website will help you figure out what classes you should take based on what you have taken already. It will also give you advice on what classes to take next.*/}
                        </span>
                    </div>
                </div>
            </header>
        </div>
        <div>
        </div>
        <div className="monolog">
            <img src={UDMonolog}></img>
        </div>
        <div className="ResourceSection">
            <div>
                2022 University of Delaware Resources
                <a
                    href="https://catalog.udel.edu/content.php?catoid=47&navoid=8860"
                    target="_blank"
                    rel="noreferrer"
                >
                    Catalog
                </a>
                <a
                    href="https://catalog.udel.edu/content.php?catoid=47&navoid=8860"
                    target="_blank"
                    rel="noreferrer"
                >
                    Programs
                </a>
                <a
                    href="https://udapps.nss.udel.edu/CoursesSearch/"
                    target="_blank"
                    rel="noreferrer"
                >
                    UD Course Search
                </a>
            </div>
            <span>
                Developed by: Alex Castro, Aidan Chao, Jack Sabagh, John Pedicone, Nicolas Steuernagle, Dhruv Patel
            </span>
        </div>
    </div>
);
}


export default App;
