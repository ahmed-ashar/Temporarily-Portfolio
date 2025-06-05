import React from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'
import Project5 from '../assets/Project5.png'
import Project6 from '../assets/Project6.png'
import Project7 from '../assets/Project7.png'
import Project8 from '../assets/Project8.png'
import Project9 from '../assets/Project9.png'
import Project10 from '../assets/Project10.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Resume Builder',
          desc: 'Resume Builder is a web app to create, edit, and download resumes. It offers modern design, easy navigation, customizable templates, real-time editing, and export options.',
          image: Project1,
          live: "https://resume-x-frontend.vercel.app/",
          github: "https://github.com/ahmed-ashar/Resume-Builder"
        },
        {
          title: 'Restrou Website',
          desc: 'This restaurant website is built using React and Tailwind CSS. It features a modern design, responsive layout, and interactive elements for a seamless user experience.',
          image: Project2,
          live: "https://restrou-frontend.vercel.app/",
          github: "https://github.com/ahmed-ashar/Restrou-FrontEnd"
        },
        {
          title: 'Homyz Website',
          desc: 'Homyz is a modern real estate website built with React and Tailwind CSS. It features a sleek design, responsive layout, and interactive elements for an engaging user experience.',
          image: Project3,
          live: "https://homyz-front-end.vercel.app/",
          github: "https://github.com/ahmed-ashar/Homyz-FrontEnd"
        },
        {
          title: 'Music Player',
          desc: 'Music Player is a simple web application for playing and managing a music library. It offers a basic design, responsive layout, and interactive elements for ease of use.',
          image: Project4,
          live: "https://ahmed-ashar.github.io/CodeAlpha_Music_Player/",
          github: "https://github.com/ahmed-ashar/CodeAlpha_Music_Player"
        },
        {
          title: 'Interwood Website',
          desc: 'Interwood is a modern business website built with React and Tailwind CSS. It features a sleek design, responsive layout, and interactive elements for an engaging user experience.',
          image: Project5,
          live: "https://inter-word-clone-in-progress.vercel.app/",
          github: "https://github.com/ahmed-ashar/InterWord-Clone-InProgress"
        },
        {
          title: 'Event Central',
          desc: 'Event Central is a modern event management website built with React and Tailwind CSS. It features a sleek design, responsive layout, and interactive elements for an engaging user experience.',
          image: Project6,
          live: "https://eventcentral.netlify.app/",
          github: "https://github.com/ahmed-ashar/EventCentral"
        },
        {
          title: 'SignUp/LogIn Page with Firebase',
          desc: 'SignUp/LogIn Page with Firebase is a web application that allows users to register and log in using Firebase authentication. It features a modern design, responsive layout, and secure authentication.',
          image: Project7,
          live: "https://ahmed-ashar.github.io/SignUp-LogIn-Page-With-Firebase/",
          github: "https://github.com/ahmed-ashar/SignUp-LogIn-Page-With-Firebase"
        },
        {
          title: 'Image Gallery',
          desc: 'Image Gallery is a web application that allows users to view and manage images in a gallery format. It features a modern design, responsive layout, and interactive elements for an engaging user experience.',
          image: Project8,
          live: "https://ahmed-ashar.github.io/CodeAlpha_Image_Gallery/",
          github: "https://github.com/ahmed-ashar/CodeAlpha_Image_Gallery"
        },
        {
          title: 'LinkedIn Clone',
          desc: 'LinkedIn Clone is a web application that replicates the core features of LinkedIn. It allows users to create profiles, connect with others, and share content. The design is modern and responsive, providing an engaging user experience.',
          image: Project9,
          live: "https://linkedin-ui-clone-three.vercel.app/",
          github: "https://github.com/ahmed-ashar/Linkedin-UI-Clone"
        },
        {
          title: 'Calculator App',
          desc: 'Calculator App is a simple web application that performs basic arithmetic operations. It features a clean design, responsive layout, and interactive elements for ease of use.',
          image: Project10,
          live: "https://ahmed-ashar.github.io/CodeAlpha_Calculator/",
          github: "https://github.com/ahmed-ashar/CodeAlpha_Calculator"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
