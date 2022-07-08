import React from "react";
import "./Experience.css";

const Resume = () => {
  const techs = [
    {
      id: 1,
      icon: "devicon-html5-plain-wordmark",
      title: "HTML",
      style: "shadow-green-500",
    },
    {
      id: 2,
      icon: "devicon-python-plain",
      title: "Python",
      style: "shadow-green-500",
    },
    {
      id: 3,
      icon: "devicon-c-plain",
      title: "C++",
      style: "shadow-green-500",
    },
    {
      id: 4,
      icon: "devicon-javascript-plain",
      title: "Javascript",
      style: "shadow-green-500",
    },
    {
      id: 5,
      icon: "devicon-tailwindcss-plain",
      title: "Tailwind CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      icon: "devicon-dotnetcore-plain",
      title: ".NET CORE",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      icon: "devicon-dotnetcore-plain",
      title: ".NET CORE",
      style: "shadow-blue-500",
    }

  ];

  return (
    <div
      name="Experience"
      className="bg-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are some of the languages that I have worked with to create projects as well as apply in an internship.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center sm:px-0">
          {techs.map(({ id, icon, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-sm ${style}`}
            >
              <i className={icon} style={{fontSize:40}} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;