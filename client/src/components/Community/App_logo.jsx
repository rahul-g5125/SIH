import React from "react";
import styles from './App_logo.module.css';

export default function App_logo(props){
    return <img className={styles.app_logo} src={props.img} alt="" />;
}