import React from "react";
import "./Skills.css";

const Skills = () => {
  const techs = [
    {
      id: 1,
      icon: "devicon-html5-plain-wordmark",
      title: "HTML",
      style: "shadow-white",
    },
    {
      id: 2,
      icon: "devicon-python-plain",
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 3,
      icon: "devicon-cplusplus-plain",
      title: "C++",
      style:"shadow-white",
    },
    {
      id: 4,
      icon: "devicon-javascript-plain",
      title: "Javascript",
      style: "shadow-white",
    },
    {
      id: 5,
      icon: "devicon-tailwindcss-plain",
      title: "Tailwind CSS",
      style: "shadow-white",
    },
    {
      id: 6,
      icon: "devicon-dotnetcore-plain",
      title: ".NET CORE",
      style: "shadow-white",
    },
    {
      id: 7,
      icon: "devicon-microsoftsqlserver-plain",
      title: "Microsoft SQL Server",
      style: "shadow-white",
    },
    {
      id: 8,
      icon: "devicon-visualstudio-plain",
      title: "Visual Studio",
      style: "shadow-white",
    },
    {
      id: 9,
      icon: "devicon-bootstrap-plain",
      title: "Bootstrap",
      style: "shadow-white",
    },
    {
      id: 10,
      icon: "devicon-java-plain",
      title: "Java",
      style: "shadow-white",
    },
    {
      id: 11,
      icon: "devicon-mysql-plain",
      title: "MySQL",
      style: "shadow-white",
    },
    {
      id: 12,
      icon: "devicon-nodejs-plain",
      title: "Node JS",
      style: "shadow-white",
    },
    {
      id: 13,
      icon: "devicon-photoshop-plain",
      title: "Photoshop",
      style: "shadow-white",
    },
    {
      id: 14,
      icon: "devicon-react-original",
      title: "React",
      style: "shadow-white",
    },
    {
      id: 15,
      icon: "devicon-trello-plain",
      title: "Trello",
      style: "shadow-white",
    },
    {
      id: 16,
      icon: "devicon-vim-plain",
      title: "Vim",
      style: "shadow-white",
    },
    {
      id: 17,
      icon: "devicon-phpstorm-plain",
      title: "PhpStorm",
      style: "shadow-white",
    },
    {
      id: 18,
      icon: "devicon-numpy-original",
      title: "Numpy",
      style: "shadow-white",
    },
    {
      id: 19,
      icon: "devicon-jquery-plain",
      title: "jQuery",
      style: "shadow-white",
    },
    {
      id: 20,
      icon: "devicon-git-plain",
      title: "Git",
      style: "shadow-white",
    },
    {
      id: 21,
      icon: "devicon-csharp-plain",
      title: "C#",
      style: "shadow-white",
    },
    {
      id: 22,
      icon: "devicon-androidstudio-plain",
      title: "Android Studio",
      style: "shadow-white",
    },
    {
      id: 23,
      icon: "devicon-firebase-plain",
      title: "Firebase",
      style: "shadow-white",
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
          <p className="text-4xl font-bold border-b-4 bottom-gray-500 inline">
            Skills
          </p>
          <p className="py-6">These are some of the languages that I have worked with to create projects as well as apply in an internship.</p>
        </div>

        <div className="w-full grid grid-rows-7 grid-cols-8 gap-6 text-center sm:px-0">
          {techs.map(({ id, icon, title, style }) => (
            <div
              key={id}
              className={`shadow-sm hover:scale-105 duration-500 py-2 ${style}`}
            >
              <i className={icon} style={{fontSize:45}} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;