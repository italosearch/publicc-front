import React, { useState } from "react";
import CreditCardIcon from "../assets/credit-card-svgrepo-com.svg";
import BarcodeIcon from "../assets/barcode-svgrepo-com.svg";
import CVVIcon from "../assets/card-cvv.svg";
import Image from "next/image";
import styles from "../styles/components/creditCard.module.css";
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
            className={isCreditCardSelected ? styles.active : ""}
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
            className={isTicketSelected ? styles.active : ""}
          >
            Boleto
            <Image src={BarcodeIcon} alt="barcode" width={20} height={20} />
          </button>
        </div>
        {isCreditCardSelected && (
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
              <h1>R$ 70,99</h1>
            </div>
            <div className={styles.termsBox}>
              <button></button>
              <span>
                <strong>Importante:</strong> Estou de acordo com os{" "}
                <a>termos de adesão</a>
              </span>
            </div>
            <button>Realizar Pagamento</button>
          </section>
        )}

        <section className={styles.formContent}>
          <fieldset>
            <label htmlFor="">NOME COMPLETO (SEM ACENTOS) *</label>
            <input type="number" name="" placeholder="Jose Miguel da Silva" />
          </fieldset>

          <div className={styles.dateCPF}>
            <label htmlFor="">CPF*</label>
            <input type="number" name="" placeholder="706328301-00" />
          </div>

          <div className={styles.dateNumber}>
            <label htmlFor="">CELULAR (COM DDD)</label>
            <input type="text" name="" placeholder="61 995457203" />
          </div>

          <div className={styles.dateADRESS}>
            <label htmlFor="">ENDEREÇO *</label>
            <input type="text" name="" placeholder="SQN 306 NORTE BLOCO I" />
          </div>

          <div className={styles.numberhome}>
            <label htmlFor="">NÚMERO*</label>
            <input type="text" name="" placeholder="" />
          </div>

          <div className={styles.dateComplement}>
            <label htmlFor="">COMPLEMENTO *</label>
            <input type="text" name="" placeholder="" />
          </div>

          <div className={styles.dateBairro}>
            <label htmlFor="">BAIRRO *</label>
            <input type="text" name="" placeholder="" />
          </div>

          <div className={styles.numberCEP}>
            <label htmlFor="">CEP*</label>
            <input type="text" name="" placeholder="70745-090" />
          </div>

          <div className={styles.dateCITY}>
            <label htmlFor="">CIDADE *</label>
            <input type="text" name="" placeholder="COCALZINHO DA MATA" />
          </div>

          <div className={styles.numberUF}>
            <label htmlFor="">ESTADO*</label>
            <input type="text" name="" placeholder="UF" />
          </div>

          <div className={styles.termsBox}>
            <button></button>
            <span>
              <strong>Importante:</strong> Estou de acordo com os{" "}
              <a>termos de adesão</a>
            </span>
          </div>
          <button>Gerar Boleto</button>
        </section>
      </form>
    </div>
  );
}
