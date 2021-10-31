import React from 'react';
import styles from '../styles/components/registerData.module.css';

export function RegisterData() {
  return (
    <div className={styles.registerDataContainer}>
      <form className={styles.registerDataForm}>
        <div className={styles.formTitle}>
          <h1>1 - Dados Cadastrais</h1>
        </div>
        <fieldset>
          <div>
            <label htmlFor="name">Nome completo</label>
            <input type="text" placeholder="Digite seu nome completo" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Digite seu melhor e-mail" />
          </div>
          <div>
            <label htmlFor="cpfcnpj">CPF/CNPJ</label>
            <input type="text" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
