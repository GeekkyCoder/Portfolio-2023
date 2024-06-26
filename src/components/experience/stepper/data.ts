export type Steps = {
  id: number;
  label: string;
  location: string;
  type: string;
  description1?: string;
  description2?: string;
  description3?: string;
  duration: string;
  show: boolean;
};

export const steps: Steps[] = [
  {
    id: 1,
    label: "Frontend Developer At Core It Logics LLC",
    location: "Karachi,Pakistan",
    type: "Onsite",
    duration: "06/2023 - 05/24",
    description1: `Contributed to the design and implementation of front- end architectures using ReactJS. By employing best
      practices such as modularization, code reusability, and
      efficient data flow management.
                `,
    description2: `Utilized Redux,Flux or similar state management libraries, effectively managed complex application states, ensuring data consistency across components. also
      integrated Redux middleware and implemented
      asynchronous actions to handle API requests and data
      fetching.`,

    description3: `Optimized apps for better performance by implementing
                techniques such as code splitting, lazy loading, and
                memoization. I have also employed performance profiling
                tools to identify bottlenecks and enhance overall
                application speed and responsiveness.`,
    show: true,
  },
  {
    id: 2,
    label: "React Developer At Hostelin",
    location: "Hyderabad,Pakistan",
    type: "Onsite",
    duration: "08/2022 - 01/2023",
    description1: `During my employment as a React developer At Hostelin, I had the invaluable opportunity to immerse myself in the world of web development and gain practical experience working with one of the most popular JavaScript libraries.`,
    description2: `One of the highlights of my role was diving into the intricacies of React's component-based architecture. I became proficient in breaking down complex user interfaces into smaller, reusable components, fostering a modular and efficient development approach.`,
    show: true,
  },
  {
    id: 3,
    label: "UI/Ux Developer At Artive",
    location: "Budapest,Hungry",
    type: "Internship (Remote)",
    duration: "09/2022 - 01/2023",
    description1: `Creating thoughtful user experiences, and converting
        them into a visual form, combined strong concepting
        skills with creative design & execution.`,
    description2: `Visualizing, designing, and conceptualizing user
      experiences. This includes information design hierarchy, process/screen flows, concept sketches, annotated
      wireframes, interactive prototypes, high fidelity visual
      mockups, and optimized graphics production.`,
    description3: `Communicating design strategy, rationale, and
      perspective and presenting UX and UI design concept.`,
    show: true,
  },
  {
    id: 4,
    label: "React Developer At ViaRika",
    location: "Chicago,IL,USA",
    type: "Contract (Remote)",
    duration: "09/2022 - 01/2023",
    description1: `Worked With ViaRika as a React Developer to make a video editor web app for the company.`,
    description2: `The Purpose of video editor was only to be used by the site admins to edit their videos, i also made the ViaRika's site landing page and improved the UI of overall website by using tools like lighthouse and code spilliting/chunking using webpack to reduce to javascript files bundle size.`,
    show: true,
  },
];
