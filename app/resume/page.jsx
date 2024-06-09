"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss, SiFlutter, SiFirebase,
} from "react-icons/si";

//about data
const about = {
  title: 'About Me',
  description: 'Dynamic and enthusiastic Computer Science student with an engaging foundation in emerging technologies. Passionate about staying abreast of the latest advancements in the tech industry.',
  info: [
    {
      fieldName: "Name: ",
      fieldValue: "Ashish Scott"
    },
    {
      fieldName: "Phone: ",
      fieldValue: "+91-7355064414"
    },
    {
      fieldName: "Experience: ",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Instagram: ",
      fieldValue: "ashish._02"
    },
    {
      fieldName: "Nationality: ",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email: ",
      fieldValue: "scottashish67@gmail.com"
    },
    {
      fieldName: "Hobby: ",
      fieldValue: "Travelling, Videography"
    },
    {
      fieldName: "Languages: ",
      fieldValue: "Java, Python, HTML, ReactJS"
    },
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "With over 2 years of experience as a software developer, I have designed and implemented scalable applications using various programming languages and frameworks. I specialize in full-stack development, focusing on optimizing performance and ensuring seamless user experiences.",
  items: [
    {
      company: "CSEdge",
      position: "Web Development Intern",
      duration: "June-2024 to July 2024",
    },
    {
      company: "Cognizant",
      position: "Artificial Intelligence Program",
      duration: "May-2024 to June 2024",
    },
    {
      company: "PSIT, Kanpur",
      position: "Digital Marketing Intern",
      duration: "Summer 2023",
    },
    {
      company: "She's Free - Mobile Application",
      position: "Freelance Project",
      duration: "September-2023 to December-2023",
    },
    {
      company: "Ignitia 2024",
      position: "Secretary",
      duration: "December-2023 to April-2024",
    },
    {
      company: "Ingenious Club",
      position: "Vice President",
      duration: "January-2023 to November-2023",
    },
  ],
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "As a BTech student, I have gained a solid foundation in computer science principles and software engineering practices. I have completed courses in Python, HTML, CSS, JavaScript, React, and Flutter, equipping me with a diverse skill set for both front-end and back-end development. My education has emphasized hands-on projects and collaborative learning, preparing me for real-world software development challenges.",
  items: [
    {
      institution: "PSIT, Kanpur",
      degree: "B-Tech (Computer Science Technology)",
      duration: "2021-2025",
    },
    {
      institution: "University Of Michigan",
      degree: "Python Programming (OOPS, DSA, etc)",
      duration: "January 2023",
    },
    {
      institution: "Infosys Springboard",
      degree: "HTML, CSS, Javascript",
      duration: "May-2023 to September-2023",
    },
    {
      institution: "Coding Ninjas",
      degree: "Ninja Slayground (Round 1)",
      duration: "October 2023",
    },
    {
      institution: "Youtube",
      degree: "React+Redux Course",
      duration: "March 2024",
    },
    {
      institution: "Udemy",
      degree: "Web Development Bootcamp 2023",
      duration: "March 2023",
    },
    
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description: "I possess a strong skill set in web technologies, including HTML, CSS, and JavaScript, which I use to create dynamic and responsive web applications. My proficiency extends to modern frameworks and libraries such as React and Flutter, enabling me to build scalable and efficient user interfaces. Additionally, I am experienced in backend technologies, version control, and agile development practices, ensuring a comprehensive approach to software development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/ui/tooltip";

import { ScrollArea } from "@/components/ui/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
  <motion.div 
  initial={{opacity: 0}} 
  animate={{
    opacity: 1, 
    transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
}}
className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
>
  <div className="container mx-auto">
    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About Me</TabsTrigger>
      </TabsList>

      {/**content */}
      <div className="min-h-[70vh] w-full">
        {/**experience */}
        <TabsContent value="experience" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index)=> {
                  return (
                  <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      {/**dot */}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>

        {/**education */}
        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index)=> {
                  return (
                  <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      {/**dot */}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.institution}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>


        {/**Skills */}
        <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index)=> {
                return <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              })}
            </ul>
          </div>
        </TabsContent>
        {/**about */}
        <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item, index)=> {
                return (
                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl">{item.fieldValue}</span>
                </li>
                );
              })}
            </ul>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  </div>
</motion.div>
  );
};

export default Resume;
