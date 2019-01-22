import React, {Component} from 'react'
import Email from './Form/Email'
import Password from './Form/Password'
import PasswordConf from './Form/PasswordConf'

export default class Form extends Component {
  constructor(props){
    super(props)
    this.state ={
      email: '',
      emailErr: '',
      password: '',
      passwordErr: '',
      passwordConfirmation: '',
      passwordConfirmationErr: '',
    }
  }

  emailInputHandler = (e) => {
    this.setState({
      email: e.target.value,
      emailErr: ''
    })
  } 

  passwordInputHandler = (e) => {
    this.setState({
      password: e.target.value,
      passwordErr: ''
    })
  } 

  passwordConfirmationInputHandler = (e) => {
    this.setState({
      passwordConfirmation: e.target.value,
      passwordConfirmationErr: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    // error分をsetStateで作成
    if(!this.validateEmail(this.state.email)){
      this.setState({
        emailErr: 'Emailが入力されていません'
      })
    };
    if(this.state.password.length <= 5){
      this.setState({
        passwordErr: 'Passwordの文字が少ないです。5文字以上入力してください'
      })
    }
    //パスワードが一致しない
    if(this.state.password && this.state.password !== this.state.passwordConfirmation){
      this.setState({
        passwordConfirmationErr: 'パスワードが一致しません。'
      })
    }

    setTimeout(() => {
      //エラーがないとき送信できる
      if(!this.state.emailErr &&
        !this.state.passwordErr &&
        !this.state.passwordConfirmationErr){
          console.log('送信できません')
      }
    },1000)
 

  }
  // emailのバリデーション
   validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render(){
    return (
      <form action="" onSubmit={this.handleSubmit}>
       <Email email={this.state.email} emailErr={this.state.emailErr} emailInputHandler={this.emailInputHandler}/>
       <Password password={this.state.password} passwordErr={this.state.passwordErr} passwordInputHandler={this.passwordInputHandler}/>
       <PasswordConf passwordConfirmation={this.state.passwordConfirmation} passwordConfirmationErr={this.state.passwordConfirmationErr} passwordConfirmationInputHandler={this.passwordConfirmationInputHandler}/>
        <button className="btn" type="submit">Sign up</button>
      </form>
    )
  }
}


