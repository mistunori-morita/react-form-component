import React from 'react'

const PasswordConf = (props) => {
  return (
    <div className="form-group">
      <input type="password" placeholder="Password confiramation" value={props.passwordConfirmation} onChange={props.passwordConfirmationInputHandler}/>
      {props.passwordConfirmationErr &&
        <p className="input-error">{props.passwordConfirmationErr}</p>
      }
    </div>
  )
}

export default PasswordConf
