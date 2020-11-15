import React from "react";
import Profile from "./img/profile.png";
import RunSmart from "./img/RunSmart.png";
import LilConsistentMe from "./img/LilConsistentMe.png";

export default [{
    information: {
        title: "My Personal Website",
        desc : "The responsive portfolio site that you're on right now.",
        image: Profile,
    },
    languages:
        [{ name: "Javascript", color: "primary" },
        { name: "CSS3", color: "primary" },
        { name: "HTML5", color: "primary" }],
    libraries:
        [{ name: "React.js", color: "danger" },
        { name: "Bootstrap", color: "danger" },
        { name: "Heroku", color: "danger" }],
    tools:
        [{ name: "Chrome Developer Tools", color: "success" },
        { name: "VSCode", color: "success" },
        { name: "Git", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/CarterMacLennan/MyWebsite", style: "btn-dark" }]
},{
    information: {
        title: "Lil Consistent Me",
        desc: "A Tamagotchi inspired consistency tracker for Android.",
        image: LilConsistentMe,
    },
    languages:
        [{ name: "Java", color: "primary" },
        { name: "XML", color: "primary" }],
    libraries:
        [{ name: "Android.apk", color: "danger" },
        { name: "MPAndroidChart API", color: "danger" }],
    tools:
        [{ name: "Android Studio", color: "success" },
        { name: "Git", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/CarterMacLennan/LilConsistentMe", style: "btn-dark" },
        { name: "fab fa-google-play", link: "https://play.google.com/store/apps/details?id=com.myappproject.lilconsistentme", style: "btn-outline-dark" }],
},{
    information: {
        title: "RunSmart",
        desc: "A privacy-respecting GPS tracker for outdoor fitness.",
        image: RunSmart,
    },
    languages:
        [{ name: "Java", color: "primary" },
        { name: "XML", color: "primary" }],
    libraries:
        [{ name: "Android.apk", color: "danger" },
        { name: "MapBox API", color: "danger" }],
    tools:
        [{ name: "Android Studio", color: "success" },
        { name: "Git", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/btmyles/RunSmart", style: "btn-dark" },
        { name: "fab fa-google-play", link: "https://play.google.com/store/apps/details?id=com.cs2063.runsmart", style: "btn-outline-dark" }],
    }];


