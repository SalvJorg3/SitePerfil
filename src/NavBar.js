import React from 'react';
import styles from './modules.css/NavBar.module.css';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

function Example(args) {
  return (
    <div>
      <Navbar className={styles.navbar}>
        <NavItem>
          <NavLink className={styles.navname} href="/">JORGE/DEV</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={styles.navname} href="/AboutMe/">Sobre mim</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={styles.navname} href="/MyHabilities/">Minhas Habilidades
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={styles.navname} href="/ContactMe/">Fale comigo</NavLink>
        </NavItem>

      </Navbar>
    </div>
  );
}

export default Example;