import React from 'react'
import InformationFooter from "../../temp/information.json"
const Information = () => {
  return (
    <>
        {InformationFooter.infomation.length >0 && InformationFooter.infomation.map(InformationProp => (
            <li key={InformationProp.id}>
                <a href={InformationProp.link}>{InformationProp.text}</a>
            </li>
        ))}

      
    </>
  )
}

export default Information