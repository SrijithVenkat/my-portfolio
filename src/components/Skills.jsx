import React from "react";
import Tippy from '@tippyjs/react';
import "./Skills.css";

const Skills = () => {

  const techs = [
    {
      id: 1,
      icon: "devicon-html5-plain-wordmark",
      title: "HTML",
      style: "shadow-white",
      desc: "I used HTML in my SDE Internship at Tegrit as well as to create all my React Projects, including this website!"
    },
    {
      id: 2,
      icon: "devicon-python-plain",
      title: "Python",
      style: "shadow-white",
      desc: "Python is my most proficient language. This language is the one I've used in countless school and personal projects for one of my clubs, CIUS"
    },
    {
      id: 3,
      icon: "devicon-cplusplus-plain",
      title: "C++",
      style:"shadow-white",
      desc: "I learned Object-Oriented Programming(OOP) with C++ in one of my courses, which I further implemented in my one of my personal projects"
    },
    {
      id: 4,
      icon: "devicon-javascript-plain",
      title: "Javascript",
      style: "shadow-white",
      desc: "I used Javascript to build this website as well as wordle"
    },
    {
      id: 5,
      icon: "devicon-java-plain",
      title: "Java",
      style: "shadow-white",
      desc: "A language that I have taken up myself to be a well-rounded coder. Java offers many advantages from it being platform indepdent, but also making to easy to write modular programs"
    },
    // {
    //   id: 6,
    //   icon: "devicon-sqlite-plain",
    //   title: "sqlite",
    //   style: "shadow-white",
    //   desc: "Test"
    // },
    {
      id: 7,
      icon: "devicon-csharp-plain",
      title: "C#",
      style: "shadow-white",
      desc: "C# was a core part of my time being a SDE Intern at Tegrit, one of recent favorites"
    },
    {
      id: 8,
      icon: "devicon-visualstudio-plain",
      title: "Visual Studio",
      style: "shadow-white",
      desc: "Used for CSE 335 (Obect Oriented Programming) with C++, Tegrit Internship with C#"
    },
    {
      id: 9,
      icon: "devicon-bootstrap-plain",
      title: "Bootstrap",
      style: "shadow-white",
      desc: "Used in my Tegrit Internship to create a website for the employees to keep track of their PTO"
    },
    {
      id: 10,
      icon: "devicon-tailwindcss-plain",
      title: "Tailwind CSS",
      style: "shadow-white",
      desc: "Used Tailwind to create this website and my Wordle game"
    },
    {
      id: 11,
      icon: "devicon-mysql-plain",
      title: "MySQL",
      style: "shadow-white",
      desc: "Used in CSE 476 (Mobile Application Development) to make the game I created, into a multiplayer game where 2 users from different screens could login and play"
    },
    {
      id: 12,
      icon: "devicon-nodejs-plain",
      title: "Node JS",
      style: "shadow-white",
      desc: "Node JS was crucial in my time using react"
    },
    {
      id: 13,
      icon: "devicon-photoshop-plain",
      title: "Photoshop",
      style: "shadow-white",
      desc: "A hobby I picked up when I was very young, but something I've become quite good at as I make all the flyers, videos, logos, merchandise for my club, CIUS"
    },
    {
      id: 14,
      icon: "devicon-react-original",
      title: "React",
      style: "shadow-white",
      desc: "Used to make this website and Wordle"
    },
    {
      id: 15,
      icon: "devicon-trello-plain",
      title: "Trello",
      style: "shadow-white",
      desc: "Very commonly used in my time at MSU in CSE 335 (Object Oriented Programming) and in CSE 476 (Mobile Application Development, helped me excel in using the scrum framework"
    },
    {
      id: 16,
      icon: "devicon-vim-plain",
      title: "Vim",
      style: "shadow-white",
      desc: "Used in my CSE 320 (Computer Organization and Architecture) to code in assembly"
    },
    {
      id: 17,
      icon: "devicon-phpstorm-plain",
      title: "PhpStorm",
      style: "shadow-white",
      desc: "PhpStorm, used in CSE 476, assisted in communicating with my mySQL database to validate users, test inputs and outputs, and connect users to the Pipe game"
    },
    {
      id: 18,
      icon: "devicon-numpy-original",
      title: "Numpy",
      style: "shadow-white",
      desc: "Used in MTH 314 (Linear Algebra) to calculate and display results of variety of equations"
    },
    // {
    //   id: 19,
    //   icon: "devicon-jquery-plain",
    //   title: "jQuery",
    //   style: "shadow-white",
    //   desc: "Test"
    // },
    {
      id: 20,
      icon: "devicon-git-plain",
      title: "Git",
      style: "shadow-white",
      desc: "Used in my CSE 335 (Object Oriented Programming) as well as CSE 476 (Mobile Application Development) to connect the group project with my fellow peers"
    },
    {
      id: 21,
      icon: "devicon-microsoftsqlserver-plain",
      title: "Microsoft SQL Server",
      style: "shadow-white",
      desc: "Used in my SDE Internship at Tegrit to store all the data from the users, which happen to be the employees of Tegrit"
    },
    {
      id: 22,
      icon: "devicon-androidstudio-plain",
      title: "Android Studio",
      style: "shadow-white",
      desc: "Used in my CSE 476 (Mobile Application Development) course to make a multitude of apps."
    },
    // {
    //   id: 23,
    //   icon: "devicon-firebase-plain",
    //   title: "Firebase",
    //   style: "shadow-white",
    //   desc: "Test"
    // },
    {
      id: 24,
      icon: "devicon-dotnetcore-plain",
      title: ".NET Core",
      style: "shadow-white",
      desc:"Core part of my internship at Tegrit, used .NET Core to create the PTO website as well .NET MVC in projects preceding that"
    }

  ];

  return (
    <div
      name="Skills"
      className="bg-gray-800 w-full whitespace-normal min-h-screen"
    >
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 bottom-gray-300 inline">
            Skills
          </p>
          <p className="py-6">These are some of the languages, frameworks, IDEs, and libaries I've worked with. Check out my github for some of the projects mentioned! </p>
        </div>

        <div className="w-full grid grid-rows-8 grid-cols-6 gap-1 m-auto text-center sm:px-0">
          {techs.map(({ id, icon, title, style, desc }) => (
            <Tippy id="toolTip" placement="top" delay = {800} className="bg-white text-slate-600 font-light border-8 border-white rounded-md" content={desc}>
              <div className="box">
                <div key={id} className={`shadow-sm hover:scale-105 duration-500 py-4 sm:py-6 ${style}`}>
                  <i className={icon} style={{fontSize:45}} />
                  <p className="grid-text">{title}</p>
                </div>  
              </div>
            </Tippy>
          ))}
        </div>



      </div>
    </div>
  );
};

export default Skills;