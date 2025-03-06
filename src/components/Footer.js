import React from 'react';

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <p>&copy; 2024 CineMatch. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
