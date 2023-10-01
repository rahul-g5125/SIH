import React from "react";
import styles from './Community_Section.module.css'

export default function Community_Section(props){
    return  <div className={styles.section}>
        <i class='far fa-comment'></i>
        <p>{props.name}</p>
    </div>;
}