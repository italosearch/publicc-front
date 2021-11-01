import React from 'react';
import styles from '../styles/components/buyingCard.module.css';

export function BuyingCard() {
  return (
    <div className={styles.buyingCardContainer}>
      <div className={styles.buyingCard}>
        <h1>Você está comprando o plano básico</h1>
        <div className={styles.description}>
          <h2>hf hf</h2>
          <span> hf hf</span>
        </div>
        <div className={styles.price}>
          <h1>Básico</h1>
          <div>
            <h2>R$99,90</h2>
            <span>BRL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
