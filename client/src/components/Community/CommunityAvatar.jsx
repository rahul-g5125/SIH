import React, { useState } from "react";
import styles from "./Community_Avatar.module.css";

export default function CommunityAvatar(props) {
  const [isClicked, setIsClicked] = useState(null);

  const communityClickHandler = (e) => {
    setIsClicked(e.target["alt"]);
    props.onClickHandler(isClicked);
  };

  return (
    <img
      onClick={communityClickHandler}
      className={styles.community_avatar}
      src={props.img}
      value="01"
      alt="Rahul"
    />
  );
}
