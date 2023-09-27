import React, { useState } from "react";
import styles from './Community.module.css';
import logo from '../images/React.png';
import App_logo from '../components/App_logo';
import Community_Avatar from '../components/Community_Avatar';
import Community_img_1 from "../images/197435-nature-mountain-forest-landscape-fog-ultrahd-4k-wallpaper-748x421.jpg";
import Community_img_2 from "../images/the-beauty-of-the-colorful-landscape-under-the-girly-sky-wallpaper-3840x2160_54.jpg";
import Community_img_3 from "../images/beach-alone-relax-summer-aerial-view-ios-10-stock-1920x1200-5393.jpg";
import Community_img_4 from "../images/photo-1511300636408-a63a89df3482.jpg";
import Community_Section from "../components/Community_Section";
import Navbar from "../components/Navbar"

export default function Community(){
    useState("")
    return  (
    <div>
        <Navbar/>
        <div className={styles.grid_container}>
            <div className={styles.profile_icon}>
                <center><App_logo img={logo} /></center>
                <center><div className={styles.line}></div></center>
                <center><Community_Avatar img={Community_img_1} /></center>
                <center><Community_Avatar img={Community_img_2} /></center>
                <center><Community_Avatar img={Community_img_3} /></center>
                <center><Community_Avatar img={Community_img_4} /></center>
            </div>
            <div className={styles.communities}>
                <div className={styles.searchbar}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder="Find communities"/>
                </div>
            </div>
            <div className={styles.chat}></div>
        </div>
    </div>
    );
} 