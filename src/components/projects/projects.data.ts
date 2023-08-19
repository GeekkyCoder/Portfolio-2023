// type Projects = {
//   id: number;
//   projectName: string;
//   description: string;
//   techStack: string[];
//   links?: object;
// };

export const projects = [
  {
    id: 1,
    projectName: "Reader Web App",
    description:
      "Reader is a full stack mern blogging web app, UI is powered with React and Material UI, leveraging Redux for global state management and for asynchronous operations Redux-Thunk is incorporated! it involves mvc patterns, cookie-based-auth, crud operations with restful api's principles, it has likes,comments and follower features as well!",
    techStack: [
      "React",
      "Material-UI",
      "Redux",
      "Nodejs",
      "Mongodb",
      "Express",
    ],
    links: {
      github: "https://github.com/GeekkyCoder/Reader-Mern-Web-App",
      live: "https://reader-mern-web-app.vercel.app",
    },
  },
  {
    id: 2,
    projectName: "Jobster Web App",
    description:
      "jobster is a job search web application is a mern web app, that lets user to apply to jobs from various fields, users can keep track of their job status, users can see montlhy ratings of jobs posted and scheduled for interview or rejected, includes crud operation with restful api's principles",
    techStack: [
      "React",
      "Tailwind Css",
      "Redux",
      "Nodejs",
      "Mongodb",
      "Express",
    ],
    links: {
      github: "https://github.com/GeekkyCoder/jobster",
      live: "https://jobster-mern.vercel.app",
    },
  },
  {
    id: 3,
    projectName: "Rock Paper Scissor Game",
    description:
      "Rock Paper Scissor is a frontend mentor challange, users are able to play this game against computer, there are certain rules to determine who is the winner!",
    techStack: ["React", "Tailwind Css", "Context Api"],
    links: {
      github: "https://github.com/GeekkyCoder/Rock-Paper-Scissor",
      live: "https://rock-paper-scissor-frontendmentor.netlify.app",
    },
  },

  {
    id: 4,
    projectName: "Crown Store Web App",
    description:
      "crown store is full stack ecommerce mern app, it follows rest api pattern for performing crud operations! it lets users add products into their cart and checkout their cart items, stripe is added to process payments, after payment users are expected to receive a reciept/email!",
    techStack: [
      "React",
      "Tailwind Css",
      "Redux",
      "Redux-Thunk",
      "Nodejs",
      "Express",
      "Mongodb",
    ],
    links: {
      github: "https://github.com/GeekkyCoder/crown-store-ecommerce",
      live: "https://crown-store-ecommerce.vercel.app",
    },
  },
  {
    id: 4,
    projectName: "PicSome App",
    description:
      "PicSome is part of Scrimba's frontend career path, its a solo projects by scrimba, it is a imaege selling app, where users can buy pictures, perform all types of crud operations, checkout system for users to chekout the pictures they added into their cart and buy them!",
    techStack: ["React", "Tailwind Css", "Redux"],
    links: {
      github: "https://github.com/GeekkyCoder/Pic-Some",
      live: "https://picsomeapp.netlify.app",
    },
  },
];
