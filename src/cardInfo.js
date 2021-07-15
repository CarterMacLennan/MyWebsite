import React from "react";
import Profile from "./img/profile.png";
import RunSmart from "./img/RunSmart.png";
import LilConsistentMe from "./img/LilConsistentMe.png";
import mernApp from "./img/mernApp.png";
import PokeGUI from "./img/pokeGUI.png";
import CampusGymAnalytics from "./img/CampusGymAnalytics.png";
import DoIt from "./img/DoIt.png";
import SetAssociativeCache from "./img/SetAssociativeCache.png";

export default [{
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
        title: "Do It!",
        desc: "Developed in a group of three as part of my Embedded Systems class, Do It! is a combination of the games \"Simon\" and \"Bop it!\". ",
        image: DoIt,
    },
    languages:
        [{ name: "C", color: "primary" }],
    libraries:
        [{ name: "dsPIC microcontroller", color: "danger" },
        { name: "Freenove I/O devices", color: "danger" }],
    tools:
        [{ name: "Git", color: "success" },
        { name: "MPLAB", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/CarterMacLennan/DoIt", style: "btn-dark" }],
},{
    information: {
        title: "Campus Gym Analytics",
        desc : "A web application that allows the user to predict how crowded a campus gym will be. The result is calculated using multiple linear regression derived from a source on Kaggle.",
        image: CampusGymAnalytics,
    },
    languages:
        [{ name: "Python", color: "primary" },
        { name: "HTML", color: "primary" }],
    libraries:
        [{ name: "pandas", color: "danger" },
        { name: "numpy", color: "danger" },
        { name: "sklearn", color: "danger" },
        { name: "seaborn", color: "danger" },
        { name: "tornado", color: "danger" },
        { name: "os", color: "danger" },
        { name: "pickle", color: "danger" },
        { name: "matplotlib", color: "danger" }],
    tools:
        [{ name: "Juniper", color: "success" },
        { name: "Git", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/CarterMacLennan/CampusGymAnalytics", style: "btn-dark" }]
},{
    information: {
        title: "RunSmart",
        desc: "A privacy-respecting GPS tracker for outdoor fitness, developed in a group of three.",
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
},{
    information: {
        title: "PokeGUI",
        desc: "Query for pokemon and create an account to save your favourite cards. The web application is deployed to heroku, and currently in development.",
        image: PokeGUI,
    },
    languages:
        [{ name: "JavaScript", color: "primary" },
        { name: "CSS3", color: "primary" },
        { name: "HTML5", color: "primary" },
        { name: "MongoDB", color: "primary" },
        { name: "Node.js", color: "primary" }],
    libraries:
        [{ name: "React.js", color: "danger" },
        { name: "Mongoose", color: "danger" },
        { name: "Express.js", color: "danger" },
        { name: "Bootstrap4", color: "danger" }],
    tools:
        [{ name: "Heroku", color: "success" },
        { name: "Git", color: "success" },
        { name: "Axios", color: "success" },
        { name: "PokeAPI", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/CarterMacLennan/pokeAPI-GUI", style: "btn-dark" },
        { name: "fab fa-internet-explorer", link: "http://poke-api-gui.herokuapp.com/", style: "btn-outline-dark" }]
},{
    information: {
        title: "2-Way Set Associative Cache",
        desc: "Created in a group of three, a 2-way set-associative cache was implemented, and added to a simple computer architecture to be compared to a reference system using a custom benchmark software. ",
        image: SetAssociativeCache,
    },
    languages:
        [{ name: "Hexadecimal", color: "primary" },
        { name: "Assembly", color: "primary" },
        { name: "MatLab", color: "primary" },
        { name: "Java", color: "primary" }],
    libraries:
        [{ name: "DE2-115 board", color: "danger" }],
    tools:
        [{ name: "Quartus Prime", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/CarterMacLennan/Set-Associative-Cache", style: "btn-dark" }],
},{
    information: {
        title: "MERN Notes App",
        desc: "A note taking web app developed using the MERN Software Stack. Developed in tandem with my research on how JavaScript evolved from client-side to server-side.",
        image: mernApp,
    },
    languages:
        [{ name: "JavaScript", color: "primary" },
        { name: "CSS3", color: "primary" },
        { name: "HTML5", color: "primary" },
        { name: "MongoDB", color: "primary" },
        { name: "Node.js", color: "primary" }],
    libraries:
        [{ name: "React.js", color: "danger" },
        { name: "Mongoose", color: "danger" },
        { name: "Express.js", color: "danger" },
        { name: "Bootstrap4", color: "danger" }],
    tools:
        [{ name: "Git", color: "success" },
        { name: "Axios", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/CarterMacLennan/MERN-App", style: "btn-dark" }]
},{
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
        { name: "Bootstrap4", color: "danger" }],
    tools:
        [{ name: "Git", color: "success" },
        { name: "GitHub Pages", color: "success" },
        { name: "tsparticles", color: "success" }],
    redirects:
        [{ name: "fab fa-github", link: "https://github.com/CarterMacLennan/MyWebsite", style: "btn-dark" }]
}];



