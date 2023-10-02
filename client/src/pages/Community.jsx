import React, { useState } from "react";
import styles from "./Community.module.css";
import logo from "../images/React.png";
import AppLogo from "../components/Community/App_logo";
import CommunityAvatar from "../components/Community/CommunityAvatar";
import Community_img_1 from "../images/197435-nature-mountain-forest-landscape-fog-ultrahd-4k-wallpaper-748x421.jpg";
import Community_img_2 from "../images/the-beauty-of-the-colorful-landscape-under-the-girly-sky-wallpaper-3840x2160_54.jpg";
import Community_img_3 from "../images/beach-alone-relax-summer-aerial-view-ios-10-stock-1920x1200-5393.jpg";
import Community_img_4 from "../images/photo-1511300636408-a63a89df3482.jpg";
import CommunitySection from "../components/Community/Community_Section";
import Navbar from "../components/Header/Navbar";

export default function Community() {
  const [loadSections, setSection] = useState(<></>);

  const SectionsLoader = (community) => {
    // setSection((<></>)=> {
    // })
    // if (community === null) {
    //   return "Rahul";
    // } else {
    //   console.log(community);
    //   return (
    //     <>
    //       <CommunitySection name="General" />
    //       <CommunitySection name="Announcements" />
    //     </>
    //   );
    // }
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.grid_container}>
        <div className={styles.profile_icon}>
          <center>
            <AppLogo img={logo} />
          </center>
          <center>
            <div className={styles.line}></div>
          </center>
          <center>
            <CommunityAvatar
              onClickHandler={SectionsLoader}
              img={Community_img_1}
            />
          </center>
          <center>
            <CommunityAvatar
              onClickHandler={SectionsLoader}
              img={Community_img_2}
            />
          </center>
          <center>
            <CommunityAvatar
              onClickHandler={SectionsLoader}
              img={Community_img_3}
            />
          </center>
          <center>
            <CommunityAvatar
              onClickHandler={SectionsLoader}
              img={Community_img_4}
            />
          </center>
        </div>
        <div className={styles.communities}>
          <div className={styles.searchbar}>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Find communities" />
          </div>
          <SectionsLoader />
        </div>

        <div className={styles.chat}>
        </div>
      </div>
    </div>
  );
}
