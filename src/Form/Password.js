import React from 'react'

const Password = (props) => {
  return (
    <div className="form-group">
      <input type="password" placeholder="Password" value={props.password} onChange={props.passwordInputHandler}/>
      {props.passwordErr &&
        <p className="input-error">{props.passwordErr}</p>
      }
    </div>
  )
}

export default Password
