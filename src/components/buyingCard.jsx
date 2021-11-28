import React from 'react';
import styles from '../styles/components/buyingCard.module.css';

export function BuyingCard() {
  return (
    <div className={styles.buyingCardContainer}>
      <div className={styles.buyingCard}>
        <h1>Você está comprando o plano básico</h1>
        <div className={styles.price}>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
