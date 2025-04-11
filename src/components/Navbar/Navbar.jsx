import React from 'react';

const Navbar = () => {
  return (
    <section style={styles.navbarContainer}>
        <nav style={styles.navbar}>
          <div style={styles.logo}>
            <h1 style={styles.logoText}>SASUKE UCHIHA</h1>
          </div>
          <ul style={styles.navLinks}>
            <li style={styles.navItem}>
              <a href="#home" style={styles.navLink}>Home</a>
            </li>
            <li style={styles.navItem}>
              <a href="#sobre-mim" style={styles.navLink}>Sobre mim</a>
            </li>
            <li style={styles.navItem}>
              <a href="#habilidades" style={styles.navLink}>Habilidades</a>
            </li>
            <li style={styles.navItem}>
              <a href="#projetos" style={styles.navLink}>Projetos</a>
            </li>
          </ul>
        </nav>
    </section>
  );
};

// Inline styles for the navbar
const styles = {

    navbarContainer: {
        backgroundColor: '#4b6cb7',
    },
    navbar: {
        maxWidth: '1280px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 100px',
        width: '100%',
        boxSizing: 'border-box',
        margin: '0 auto',
        padding: '2rem',
    },
    logo: {
        margin: 0,
    },
    logoText: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#fff',
        margin: 0,
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'normal',
    },
};

export default Navbar;