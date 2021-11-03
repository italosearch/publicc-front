import React from 'react';
import styles from '../styles/components/buyingCard.module.css';

export function BuyingCard() {
  return (
    <div className={styles.buyingCardContainer}>
      <div className={styles.buyingCard}>
        <h1>Você está comprando o plano básico</h1>
        <div className={styles.description}>
          <h2> -</h2>
          <span>-</span>
        </div>
        <div className={styles.price}>
         
          <div>
            <h2>R$70,99</h2>
           
          </div>
        </div>
      </div>
    </div>
  );
}
