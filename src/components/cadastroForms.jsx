import React, { useState } from "react";
import Image from "next/image";
import GoogleIcon from "../assets/google-svgrepo-com.svg";
import FacebookIcon from "../assets/facebook-svgrepo-com.svg";
import styles from "../styles/components/cadastroForms.module.css";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  updateProfile
} from "firebase/auth";
import { auth } from "../services/server";
import { AuthContext } from '../contexts/Auth';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export function CadastroForms() {
  const { isAuthenticated } = AuthContext()
  const user = isAuthenticated ? auth.currentUser : null

  const [isLoginSelected, setIsLoginSelected] = useState(true);
  const [isSignUpSelected, setIsSignUpSelected] = useState(false);
  function selectButton() {
    !isLoginSelected ? setIsLoginSelected(true) : setIsLoginSelected(false);
    !isSignUpSelected ? setIsSignUpSelected(true) : setIsSignUpSelected(false);
  }

  const [form, setForm] = useState({});
  const [formRegister, setFormRegister] = useState({})
  const { email = "", password = "" } = form;
  const { emailRegister = "", passwordRegister = "", nameRegister = "" } = formRegister;
  const inputFn = (value, property, setState) =>
  setState((prevState) => ({
      ...prevState,
      [property]: value,
    }));

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log({ errorCode, errorMessage });
      });
  };


  const handleGoogle = () => {
    signInWithRedirect(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        // The signed-in user info.
        const user = result.user

        console.log('user', { token, user })
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  const handleFacebook = () => {
    signInWithRedirect(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential?.accessToken

        console.log('user', { accessToken, user })

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error)

        // ...
      })
  }

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
    .then((user) => updateProfile(user.currentUser, {
      displayName: nameRegister
    }))
    .catch((error) => {
      // An error occurred
      // ...
    });
  }

  return (
    <div className={styles.cadastroFormsContainer}>
      <div className={styles.cadastroFormsHeader}>
        <button
          onClick={selectButton}
          className={isLoginSelected ? styles.active : ""}
        >
          Entrar
        </button>
        <button
          onClick={selectButton}
          className={isSignUpSelected ? styles.active : ""}
        >
          Cadastrar
        </button>
      </div>
      {isLoginSelected ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.loginFormContent}
        >
          <div className={styles.loginWithContainer}>
            <button onClick={() => handleFacebook()}>
              <Image
                src={FacebookIcon}
                alt="login_facebook"
                width={28}
                height={28}
              />
              Entrar com Facebook
            </button>
            <button onClick={() => handleGoogle()}>
              <Image
                src={GoogleIcon}
                alt="login_google"
                width={32}
                height={32}
              />
              Entrar com Google
            </button>
          </div>
          <div className={styles.separator}>ou conecte-se com seu email</div>
          <fieldset>
            <div>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => inputFn(e.target.value, "email", setForm)}
                value={email}
              />
              <input
                type="text"
                placeholder="Senha"
                onChange={(e) => inputFn(e.target.value, "password", setForm)}
                value={password}
              />
              <button type="submit" onClick={() => handleSubmit()}>Entrar</button>
            </div>
            <span>Esqueceu a senha?</span>
          </fieldset>
        </form>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.signUpFormContent}
        >
          <div className={styles.loginWithContainer}>
            <button onClick={() => handleFacebook()}>
              <Image
                src={FacebookIcon}
                alt="login_facebook"
                width={28}
                height={28}
              />
              Cadastre-se pelo Facebook
            </button>
            <button onClick={() => handleGoogle()}>
              <Image
                src={GoogleIcon}
                alt="login_google"
                width={32}
                height={32}
              />
              Cadastre-se pelo Google
            </button>
          </div>
          <div className={styles.separator}>ou cadastre-se com seu email</div>
          <fieldset>
            <div className={styles.inputsNbuttons}>
              <input type="text" placeholder="Nome e sobrenome" onChange={(e) => inputFn(e.target.value, 'nameRegister', setFormRegister)} value={nameRegister} />
              <input type="text" placeholder="E-mail" onChange={(e) => inputFn(e.target.value, 'emailRegister', setFormRegister)} value={emailRegister} />
              <input type="text" placeholder="Senha - Mínimo 8 dígitos" onChange={(e) => inputFn(e.target.value, 'passwordRegister', setFormRegister)} value={passwordRegister} />
              <div className={styles.checkBoxes}>
                <div>
                  <button></button> Estou de acordo com os <p>Termos de Uso</p>
                </div>

                <div>
                  <button></button> Estou de acordo com as{" "}
                  <p>Políticas de privacidade</p>
                </div>
              </div>
              <button type="submit" onClick={() => handleCreateUser()}>Criar uma conta agora</button>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
}
