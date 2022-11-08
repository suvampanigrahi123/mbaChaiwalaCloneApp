import React from 'react'
import {motion} from 'framer-motion'
const Section = ({heading,text,hasButton=true,btntxt,imgsrc,imgSize="70%",backgroundColor,textColor,btnBgclr,btnColor,headingColor}) => {

  const headingOptions={
    initial:{
      y:"100%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    }
  }
  const textOptions={
    ...headingOptions,
    transition:{
      dealy:0.3
    }
  }
  const buttonOptions={
    initial:{
      y:"-100%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    },
    transition:{
      dealy:0.3,
      ease:"easeIn"
    }
  }
  const imgOptions={
    initial:{
      scale:0.1,
      opacity:0
    },
    whileInView:{
      scale:1,
      opacity:1
    },
    transition:{
      dealy:0.3
    }
  }
  return (
    <section className='Section' style={{
        backgroundColor:backgroundColor
    }}>
    <div>

        <motion.h3 {...headingOptions} style={{color:headingColor}}>{heading}</motion.h3>
        <motion.p {...textOptions} style={{color:textColor}}>{text}</motion.p>

{
    hasButton && <motion.button {...buttonOptions} data-cursorpointer={true} style={{
backgroundColor:btnBgclr,
color:btnColor        
    }} >{btntxt}</motion.button>
}
  <motion.div {...imgOptions}>
    <img style={{
        width:imgSize
    }} src={imgsrc} alt="imgsrc" />
  </motion.div>
    </div>

    </section>
  )
}

export default Section