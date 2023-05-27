import React from 'react'

const InputItem = ({label, placeholder = '', name, onChange, type='text', isTextArea = false, className}) => {
  return (
    <div className ={`row ${className}`}>
      <div>
        {!isTextArea ? <input onChange = {onChange} placeholder={placeholder} name={name} type={type}/>
        : <textarea on Change={onChange} placeholder={placeholder} name={name}></textarea>}

        <label>{label}</label>
      </div>
    </div>
  )
}

export default InputItem
