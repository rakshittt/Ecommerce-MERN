import React from 'react'
import Header from './header'
import Footer from './footer'

const layout = (props) => {
  return (
    <>
    <Header/>
    <main>

    {props.children}
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default layout