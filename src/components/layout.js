import * as React from "react"
import Footer from "./footer"
import Header from "./header"
import * as styles from "./layout.module.css"

const Layout = ({ children, active, backgroundColor, btnBackgroundColor }) => {
  return (
    <>
      <Header 
        active={active}
        backgroundColor={backgroundColor}
        btnBackgroundColor={btnBackgroundColor}
      />
      <main 
        className={styles.main} 
        style={{ backgroundColor: backgroundColor || 'defaultColor' }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
