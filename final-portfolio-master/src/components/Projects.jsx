import React from "react";
import './Project.css';
// import arrayDestruct from "../assets/project/arrayDestruct.png";
// import installNode from "../assets/project/installNode.jpg";
// import navbar from "../assets/project/navbar.png";
// import reactParallax from "../assets/project/reactParallax.png";
// import reactSmooth from "../assets/project/reactSmooth.jpg";
// import dineout from '../assets/project/dineoutclone.png'
// import reactWeather from "../assets/project/reactWeather.jpg";

const Projects = () => {

  const handleLink=(link)=>{
    
      window.open(link, "_blank")
   
  };

  

  const portfolios = [
    {
      id: 1,
      src:"https://www.youtube.com/embed/IqC9TDCsUGY?autoplay=1&mute=1&loop=1&playlist=IqC9TDCsUGY",
      title:"IMBD-Clone",
      description :" In this project, I leveraged my expertise in CSS for styling, ReactJS for building interactive user interfaces, and Material-UI for a sleek and responsive design. Additionally, I integrated the TMDB API to fetch movie and TV show data, enabling users to browse a vast collection of entertainment content.",
      techstack: "HTML, CSS, ReactJS, Material-UI, TMDB API ",
      live : "https://funny-swan-42edad.netlify.app",
      code : "https://github.com/mukeshmukes/IMBD-Clone-React",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/9EmYJecfGTs?autoplay=1&mute=1&loop=1&playlist=9EmYJecfGTs",
      title:"YouTub Clone",
      description :"In this project, I have designed and developed a YouTube clone using the React library. The YouTube clone replicates the core features of the popular video-sharing platform, allowing users to browse and watch videos,",
      techstack: "HTML, CSS, ReactJS, DOM Api",
      live: "https://super-narwhal-920160.netlify.app",
      code:"https://github.com/mukeshmukes/YouTub-Clone",
   
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/MZeEvniDhvE?autoplay=1&mute=1&loop=1&playlist=MZeEvniDhvE",
      title:"Resturant Website",
      description :"We are seeking a skilled front-end developer to create a dynamic and visually appealing restaurant website using React. The ideal candidate will have a strong understanding of web development technologies, responsive design, and user experience principles. ",
      techstack: "HTML, CSS, ReactJS",     
        live : "https://jocular-mooncake-af99c2.netlify.app",
        code : "https://github.com/mukeshmukes/Resturant_Website",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/RyfZB9xGWu4?autoplay=1&mute=1&loop=1&playlist=RyfZB9xGWu4",
      title:"Weather App",
      description :"The Weather App is a user-friendly web application built using React, designed to provide real-time weather information to users. It allows users to check current weather conditions, forecasts, and other relevant weather data for a specific location",
      techstack: "HTML, CSS, JavaScript, Bootstrap, React",     
        live : "https://rococo-haupia-c5eb49.netlify.app",
        code : "https://github.com/mukeshmukes/Weather-App",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/0MmJj6GcQqQ?autoplay=1&mute=1&loop=1&playlist=0MmJj6GcQqQ",
      title:"Spotifiy Clone",
      description :"this project was built using HTML, CSS, and JavaScript to replicate the user interface and functionality of the Spotify web application.",
      techstack: "HTML, CSS, JavaScript,",     
        live : "https://chipper-bombolone-009418.netlify.app",
        code : "https://github.com/mukeshmukes/Spotify-Clone",
    },
    
  ];

  return (
    <div
      name="projects"

      // 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out my popular project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,title,description,techstack, live,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                   <iframe
                      class="rounded-md duration-200 hover:scale-105" 
                      src={src}
                    ></iframe>
              <div className=" own-container">
                <p className="title-own font-bold ">{title}</p>
                <p className="desc-own font-light">{description}</p>
                <hr />
                <p className="tech-title-own font-bold ">Tech Stack</p>
                <p className="techstack-own font-medium">{techstack}</p>            
                
              </div>
              <hr />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(live)}>
                  Live Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(code)}>
                  Code
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
