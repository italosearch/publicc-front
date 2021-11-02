import React from 'react';
import { BuyingCard } from '../components/buyingCard';
import { CreditCard } from '../components/creditCard';
import { RegisterData } from '../components/registerdata';
import styles from '../styles/pages/landingPage.module.css';

function LandingPage() {
  return (
    <section className={styles.landingPageContainer}>
      <RegisterData />
      <CreditCard />
      <BuyingCard />
    </section>
  );
}

export default LandingPage;
