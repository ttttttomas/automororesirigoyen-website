import React from 'react'

export default function Map({width, height}) {
  return (
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.0193936743744!2d-58.38413!3d-34.679460000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccc7c45ce603%3A0xcf332bc80b18e577!2sAvenida%20Hip%C3%B3lito%20Yrigoyen%201930!5e0!3m2!1ses-419!2sar!4v1743097771764!5m2!1ses-419!2sar" 
    width={width} 
    height={height}
    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}
