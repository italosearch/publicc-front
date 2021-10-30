import Image from "next/image";
import React, { useEffect, useState, Text } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";

function Cadastro() {
  return (
    <div className="subsoul2">
      <AppBar position="absolute" color="default" elevation="0">
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
    </div>
  );
}

export default Cadastro;