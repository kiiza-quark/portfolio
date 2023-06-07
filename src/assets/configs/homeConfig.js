import React from 'react'

import {FaMobileAlt} from "react-icons/fa";
import { SiGooglescholar } from 'react-icons/si';

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Nshabiirwe Kizzah</strong>
        </h1>,
    titles: [
        "Computer Science Student",
        "Data Scientist",
        "Machine Learning Specialist",
        "Backend Developer",
        "Ugandan"
    ],
    about: {
        start: "I am currently a computer science student at Makerere University, " +
            "I'm excited by learning new things, working on software solutions" +
            " and reading about Astronomy",
        exit: "I'm fluent at Python and its packages, Web development with Js, HTML, CSS and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Student",
            company: "Makerere University",
            description: "Doing  Bachelors of science in computer science",
            date: "2022-present",
            icon: <SiGooglescholar/>,
            tags: ["ml", "dsa", "python", "docker", "django", "databases"]
        },
        {
            id: "work-2",
            title: "Student",
            company: "CodeIt Instittute of Technology",
            description: "Short course on Python, AWS, and Blockchain Engineering",
            date: "2019-2021",
            icon: <FaMobileAlt/>,
            tags: ["solidity", "aws", "python", "dsa", "flask", "api"]
        }
    ]
}


export default homeConfig