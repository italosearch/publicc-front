import Image from "next/image";
import React, { useEffect, useState, Text } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import Img01 from "./1.jpg";
import Img02 from "./2.jpg";
import Img03 from "./3.jpg";
import Img04 from "./4.jpg";

function App() {
  const [count, setCounter] = useState(1);

  useEffect(() => {
    document.getElementById(`radio${count}`).checked = true;

    setTimeout(() => {
      if (count < 4) {
        setCounter(count + 1);
      } else {
        setCounter(1);
      }
    }, 4000);
  }, [count]);

  return (
    <div className="container">
      
      <AppBar position="absolute" color="transparent" elevation="0">
        <Toolbar style={{ justifyContent: "flex-end", color: "#000000" }}>
          <Button
            variant="outlined"
            color="inherit"
            style={{ justifyContent: "flex-end", color: "#000000", margin: 10 }}
          >
            ENTRAR
          </Button>

          <Button variant="outlined" color="inherit">
            ASSINAR
          </Button>

          <Button
            variant="outlined"
            color="inherit"
            boxShadow="transparent"
            style={{ justifyContent: "flex-end", color: "#000000", margin: 10 }}
          >
            CADASTRAR
          </Button>
        </Toolbar>
      </AppBar>

      <div id="contorno" className="centro">
        <font face="Tahoma,lucida grande,Verdana,Arial,sans-serif">
          <b>
            enuence<hr></hr>
          </b>
        </font>
        </div>

        <div id="contorn" className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <Image src={Img01} width={328} height={210} />
            </div>

            <div className="slide">
              <Image src={Img02} width={328} height={210} />
            </div>

            <div className="slide">
              <Image src={Img03} width={328} height={210} />
            </div>

            <div className="slide">
              <Image src={Img04} width={328} height={210} />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>

          <div class="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>
    
  );
}
export default App;