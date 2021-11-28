import React, { useEffect } from 'react';
import { CadastroForms } from '../components/cadastroForms';
import styles from '../styles/pages/cadastro.module.css';
import { auth } from '../services/server'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();


function Cadastro() {
  useEffect( () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
})

  }, []) 
  
  return (
    <div className={styles.cadastroContainer}>
      <CadastroForms />
    </div>
  );
}

export default Cadastro;
