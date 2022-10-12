import React from 'react'
import MyNavbar from './Navbar/Navbars'
import styles from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <div className={styles.myLayout}>
        <header>
            <MyNavbar/>
        </header>

        <main className={styles.maincom}>
          {children}
        </main>
    </div>
  )
}

export default Layout