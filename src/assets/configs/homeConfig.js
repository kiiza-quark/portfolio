import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
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
            description: "Doing  Bachelor of science in computer science",
            date: "2022-present",
            icon: <SiGooglescholar/>,
            tags: ["ml", "DSA", "python", "docker", "Django", "Databases"]
        },
        {
            id: "work-2",
            title: "BI Manager",
            company: "Rappi",
            description: "Leading a team of analysts and data scientists to execute different projects, " +
                "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
            date: "2019-2021",
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "CRM Analytics Coordinator",
            company: "Avianca",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "BI Analyst",
            company: "Onelink BPO",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}


export default homeConfig