import React from 'react';

import styles from '../styles/components/creditCard.module.css';
export function CreditCard() {
 function handleSubmit(e) {
   e.preventDefault();
 }
  return (
    <div className={styles.creditCardContainer}>
      <form onSubmit={handleSubmit} className={styles.creditCardForm}>
        <div className={styles.creditCardHeader}>
          <button>Cartão de crédito</button>
          <button>Boleto</button>
        </div>
        <section className={styles.formContent}>
          <fieldset>
            <label htmlFor="">NÚMERO DO CARTÃO *</label>
            <input type="number" name="" placeholder="0000 0000 0000 0000" />
          </fieldset>
          <fieldset>
            <label htmlFor="">NOME IMPRESSO NO CARTÃO *</label>
            <input type="text" name="" />
          </fieldset>
          <div className={styles.dateCVV}>
            <div>
              <label htmlFor="">MÊS E ANO DO VENCIMENTO *</label>
              <input type="text" name="" placeholder="MM/AA" />
            </div>
            <div>
              <label htmlFor="">CÓDIGO DE SEGURANÇA (CVV) *</label>
              <input type="number" name="" placeholder="000" />
            </div>
          </div>
          <div className={styles.priceCard}>
            <h1>R$ 99,90</h1>
            <span>BRL</span>
          </div>
          <div className={styles.termsBox}>
            <button></button>
            <span>
              <strong>Importante:</strong> Estou de acordo com os{' '}
              <a>termos de adesão</a>
            </span>
          </div>
          <button>Realizar Pagamento</button>
        </section>
      </form>
    </div>
  );
}
