import React, { useState } from 'react';
import CreditCardIcon from '../assets/credit-card-svgrepo-com.svg';
import BarcodeIcon from '../assets/barcode-svgrepo-com.svg';
import CVVIcon from '../assets/card-cvv.svg';
import Image from 'next/image';
import styles from '../styles/components/creditCard.module.css';
export function CreditCard() {
  const [isCreditCardSelected, setIsCreditCardSelected] = useState(true);
  const [isTicketSelected, setSelectTicket] = useState(false);
  function selectButton() {
    !isCreditCardSelected
      ? setIsCreditCardSelected(true)
      : setIsCreditCardSelected(false);
    !isTicketSelected ? setSelectTicket(true) : setSelectTicket(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.creditCardContainer}>
      <form onSubmit={handleSubmit} className={styles.creditCardForm}>
        <div className={styles.creditCardHeader}>
          <button
            onClick={selectButton}
            className={isCreditCardSelected ? styles.active : ''}
          >
            Cartão de crédito
            {/* <CreditCardIcon /> */}
            <Image
              src={CreditCardIcon}
              alt="creditcard"
              width={20}
              height={20}
            />
          </button>

          <button
            onClick={selectButton}
            className={isTicketSelected ? styles.active : ''}
          >
            Boleto
            <Image src={BarcodeIcon} alt="barcode" width={20} height={20} />
          </button>
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
              <Image src={CVVIcon} alt="cvv" width={25} height={25} />
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
