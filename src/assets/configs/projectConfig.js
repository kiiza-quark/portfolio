import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import venusSun from "../images/VENUS_SUN_MOON.png"
import asteroidFlyby from "../images/near-earth-asteroid-1986-da.jpeg"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Exploring Celestial Angles",
        links: [
            {
                name: "repo",
                url: "https://github.com/kiiza-quark/Observed-planets",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/kiiza-quark/Observed-planets/fork",
                icon: <BiGitRepoForked/>,
            },
            // {
            //     name: "subscription",
            //     url: "",
            //     icon: <AiFillEye/>,
            // },
            // {
            //     name: "docs",
            //     url: "",
            //     icon: <ImBook/>,
            // }
        ],
        image: venusSun,
        description: "This Python project analyzes celestial angles, identifies photogenic moments in space",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Asteroid Flybys",
        links: [
            {
                name: "repo",
                url: "https://github.com/kiiza-quark/asteroid-flybys",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/kiiza-quark/asteroid-flybys/fork",
                icon: <BiGitRepoForked/>,
            },
            // {
            //     name: "subscription",
            //     url: "",
            //     icon: <AiFillEye/>,
            // },
            {
                name: "spiceypy",
                url: "https://spiceypy.readthedocs.io/en/main/",
                icon: <ImBook/>,
            }
        ],
        image: asteroidFlyby,
        description: "Analyze the trajectory of an asteroid in relation to Earth using SPICE toolkit calculations.",
        target: "_blank"
    }
]

export default projectConfig