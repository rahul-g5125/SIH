import React, { useState } from "react";
import styles from './Community_Avatar.module.css';

export default function Community_Avatar(props){
    const [isClicked,setisClicked] = useState(false);

    function communityClickHandler(){
        setisClicked(!isClicked);
    }

    return <img onClick={communityClickHandler} className={styles.community_avatar} src={props.img} clickstatus={isClicked} alt="" />;
}