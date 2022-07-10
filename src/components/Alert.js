import React from 'react'

function Alert(props) {
    // const capt = (word)=>{
    //   const lower = word.toLowerCase();
    //   return lower.charAt(0).toUppercase() + lower.slice(1);
    // }

  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}

        </div>
    </div>
  )
}

export default Alert