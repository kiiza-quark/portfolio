import {
    SiPython,
    SiPostgresql,
    SiDocker,
    SiAmazonaws,
    SiGooglecloud,
    SiFirebase,
    SiFlutter,
    SiDjango,
    SiUbuntu,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiGooglecolab,
    SiAmazons3,
    SiRos,
    SiC
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiAmazonaws size={50}/>,
            text: "AWS Cloud"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiDjango size={50}/>,
            text: "Django"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiUbuntu size={50}/>,
            text: "Ubuntu"

        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiFlutter size={50}/>,
            text: "Flutter"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiRos size={50}/>,
            text: "ROS"
        }
    ],
    complementarySkills: [
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiGooglecloud size={50}/>,
            text: "Google Cloud"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiFirebase size={50} />,
            text: "Firebase"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        }
        ,
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiAmazons3 size={50}/>,
            text: "AWS S3"
        }
        ,
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiGooglecolab size={50}/>,
            text: "Google Colab"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiC size={50} />,
            text: "C Pogramming"
        }
    ]
}

export default skillsConfig
