import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/42937380?s=460&u=770f0384c01cbb1f57e78297e01c2961d28d46b6&v=4" alt="Rodolfo Oliveira"/>
        <div>
          <strong>Rodolfo Oliveira</strong>
          <span>Desenvolvimento</span>
        </div>
      </header>

      <p>
        Mestre em ensinar informática basica para iniciantes. Paciência é meu lema.
        <br/><br/>
        Text
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;