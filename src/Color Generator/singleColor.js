import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  console.log(bcg)
  const hexValue = `#${hexColor}`;
  const handleAlert = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {setAlert(false)}, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={handleAlert}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    {alert && <p>Copied to clipboard</p>}
  </article>
}

export default SingleColor;