import React, { FormEvent, useState } from "react";
import ClassNames from "@/libs/ClassNames";
import styles from "./styles.module.scss";

interface ILogin {
  login: string,
  password: string,
  copyPassword: string
}

const SignUpComponent: React.FC = () => {
  const [{ login, password, copyPassword }, setLoginData] = useState<ILogin>({
    login: "",
    password: "",
    copyPassword: ""
  });
  const changeLogin = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setLoginData(prevState => ({ ...prevState, login: value }));
  }
  const changePassword = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setLoginData(prevState => ({...prevState, password: value}));
  }
  const changeCopyPassword = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setLoginData(prevState => ({ ...prevState, copyPassword: value }));
  }
  const sendToCreateAccount = () => {
    if(password === copyPassword) {
      return;
    }
  }
  return (
    <div className={ styles.page }>
      <div className={ styles.popup }>
        <div className={ styles.content }>
          <div className={ styles.title }> Create account </div>
          <input placeholder={ "Create your login" } onInput={ (event) => changeLogin(event) } className={ ClassNames(styles.login, styles.field) } />
          <input type={ "password" } placeholder={ "Create your password" } onInput={ (event) => changePassword(event) } className={ ClassNames(styles.password, styles.field) } />
          <input type={ "password" } placeholder={ "Copy your password" } onInput={ (event) => changeCopyPassword(event) } className={ ClassNames(styles.password, styles.field) } />
          <button onClick={ () => sendToCreateAccount() } className={ styles.sendBtn }> sign up </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpComponent;
