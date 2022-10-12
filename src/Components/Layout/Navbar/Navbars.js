import React from 'react'
import styles from './Navbar.module.scss'
import {SiLibrarything} from 'react-icons/si';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
  return (

    <>
    <Navbar  className={styles.container}>
      <Container className={styles.navItems}>
      <div className={styles.logo}>
        <SiLibrarything className={styles.logoIcon}/><h6>LIBRARY MANAGEMENT SYSTEM</h6>
      </div>
      <div className={styles.login}>
           <p>Login</p>
      </div>
      </Container>
    </Navbar>
  </>

   
  )
}

export default MyNavbar

