import React from "react";
import "./Skills.css"
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-t from-black to-gray-800 p-4 text-white whitespace-normal min-h-screen"
    >
      <br/>
      <br/>
      <br/>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 bottom-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to connect with me!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/9e9ccce6-cb0d-4cf0-94b5-670a64d282a6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-slate-500 bg-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's connect
            </button>
          </form>
        </div>
        <div className="flex flex-row h-screen justify-center items-center whitespace-nowrap px-5">
            <a href = "https://www.linkedin.com/in/srijith-venkateshwaran" className="rounded-tr-md m-10 items-center font-thin">LinkedIn <FaLinkedin size={30} /></a>
            <a href = "https://github.com/SrijithVenkat" className="rounded-tr-md m-10 font-thin">Github <FaGithub size={30} /></a>
            <a href = "mailto:srijithvenkateshwaran@gmail.com" className="rounded-tr-md m-10 font-thin">Email <HiOutlineMail size={30} /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;