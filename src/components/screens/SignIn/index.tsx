import React, { FormEvent, useState } from "react";
import ClassNames from "@/libs/ClassNames";
import styles from "./styles.module.scss";
import mainPage from "@/pages/MainPage";
import Link from "next/link";

interface ISignData {
  login: string,
  password: string
}

const SignInComponent: React.FC = () => {
  const [logData, setLogData] = useState<ISignData>({
    login: "",
    password: ""
  });
  const ChangeLoginField = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setLogData(prevState => {
      return {
        ...prevState,
        login: value
      }
    });
  }
  const ChangePasswordField = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setLogData(prevState => {
      return {
        ...prevState,
        password: value
      }
    })
  }

  return (
    <div className={ styles.page }>
      <div className={ styles.popup }>
        <div className={ styles.content }>
          <div className={ styles.title }> Sign in account </div>
          <input placeholder={ "Enter your login" } onInput={ (event) => ChangeLoginField(event) } className={ ClassNames(styles.login, styles.field) } />
          <input type={ "password" } placeholder={ "Enter your password" } onInput={ (event) => ChangePasswordField(event) } className={ ClassNames(styles.password, styles.field) } />
          <button className={ styles.sendBtn }> sign in </button>
          <div className={ styles.notHaveAccount }><Link href={ "/SignUp" } ><a> no account? CREATE </a></Link></div>
        </div>
      </div>
    </div>
  )
}

export default SignInComponent;
