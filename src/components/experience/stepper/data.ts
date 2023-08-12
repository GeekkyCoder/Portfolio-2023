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
    label: "React Developer At ViaRika",
    location: "Chicago,IL,USA",
    type: "Remote",
    duration: "12/2022 - 04/23",
    description1: `Contributed to the design and implementation of front- end architectures using ReactJS. By employing best
      practices such as modularization, code reusability, and
      efficient data flow management.
                `,
    description2: `Utilized Redux or similar state management libraries, effectively managed complex application states, ensuring data consistency across components. also
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
    label: "UI/UX Developer Intern At Artive",
    location: "Budapest,Hungry",
    type: "Remote",
    duration: "10/2022 - 03/2023",
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
    id: 3,
    label: "React Developer Intern At Hostelin",
    location: "Jamshoro,Pakistan",
    type: "Onsite",
    duration: "10/2022 - 30/2022",
    description1: `During my internship as a React developer At Hostelin, I had the invaluable opportunity to immerse myself in the world of web development and gain practical experience working with one of the most popular JavaScript libraries.`,
    description2: `One of the highlights of my internship was diving into the intricacies of React's component-based architecture. I became proficient in breaking down complex user interfaces into smaller, reusable components, fostering a modular and efficient development approach.`,
    show: true,
  },
];
