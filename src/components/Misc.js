import React, { Fragment } from 'react'
import logo from "../assets/logo.png"
import {BsMouse} from 'react-icons/bs'
import {Link} from "react-router-dom"
const Misc = () => {
  return (
    <Fragment>
        <div className="cursor"></div>
        <Link href="/" className="logo">
            <img src={logo} alt="logo"  data-cursorpointer={true} />
        </Link>
        <Link href="/franchise" className="franchiseBtn" data-cursorpointer="true">
            get a Franchise
        </Link>
        <BsMouse className='scrollBtn' />
    </Fragment>
  )
}

export default Misc