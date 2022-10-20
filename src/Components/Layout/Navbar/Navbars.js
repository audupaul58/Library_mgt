import React from 'react'
import styles from './Navbar.module.scss'
import {SiLibrarything} from 'react-icons/si';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LoginDia from '../Login/SignIn.js';
import {signOut, useSession} from 'next-auth/react'
import SignIn from '../../../pages/login.js'


const MyNavbar = () => {

  const {data: session, status } = useSession ({default: true})

  const handleLogOut = () =>{
    signOut({callbackUrl: '/'})
   
  }

  return (

    

    <>
    <Navbar  className={styles.container}>
      <Container className={styles.navItems}>
      <div className={styles.logo}>
        <SiLibrarything className={styles.logoIcon}/><h6>LIBRARY MANAGEMENT SYSTEM</h6>
      </div>
      <div className={styles.login}>
          { status === 'unauthenticated' ? <LoginDia/> : <button onClick={handleLogOut}>LogOut</button>}
      </div>
      </Container>
    </Navbar>
  </>

   
  )
}

export default MyNavbar

