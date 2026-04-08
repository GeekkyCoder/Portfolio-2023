export type Steps = {
  id: number;
  label: string;
  location: string;
  type: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  duration: string;
  show: boolean;
};

export const steps: Steps[] = [
  {
    id: 1,
    label: "Software Engineer At Paysys Labs",
    location: "Karachi,Pakistan",
    show: true,
    type: "Onsite",
    duration: "07/2024 - Present",
    description1:"Optimized a large React-based merchant onboarding form by implementing custom client-side caching for constant APIs/LOVs, reducing load time from ~10–15 seconds to near-instant and improving onboarding performance and user experience.",
    description2:
      "Optimized API request handling using concurrency-controlled batching, reducing concurrent API calls by ~90% and improving reliability and consistency of data fetching",
    description3:
      "Built and maintained production terminal integrations (POS, SoftPOS, RaastQR, Soundbox), focusing on reliability, clear error handling, and smooth rollout across environments.",
    description4:
      "Rebuilt the merchant portal from the ground up (React 19) with a scalable component architecture, consistent UX patterns, and maintainable state/data flow.",
  },
  {
    id: 2,
    label: "Frontend Developer At Core It Logics LLC",
    location: "Karachi,Pakistan",
    type: "Onsite",
    duration: "06/2023 - 05/24",
    description1:
      "Helped design and implement scalable React front-end architecture with modular, reusable components and predictable data flow—making features easier to ship and maintain.",
    description2:
      "Owned complex UI state using Redux/Flux-style patterns, middleware, and async actions—keeping data consistent across screens while integrating APIs cleanly.",
    description3:
      "Improved performance through code splitting, lazy loading, memoization, and profiling—reducing UI jank and improving overall responsiveness.",
    show: true,
  },
  {
    id: 3,
    label: "UI/Ux Developer At Artive",
    location: "Budapest,Hungary",
    type: "Internship (Remote)",
    duration: "09/2022 - 01/2023",
    description1:
      "Crafted user-centric UI/UX concepts and translated them into clear, high-fidelity designs that improved usability and visual consistency.",
    description2:
      "Produced flows, annotated wireframes, interactive prototypes, and polished mockups—supporting faster iteration and clearer cross-team alignment.",
    description3:
      "Presented design rationale and tradeoffs to stakeholders, ensuring feedback was actionable and decisions were documented.",
    show: true,
  },
//   {
//     id: 4,
//     label: "React Developer At ViaRika",
//     location: "Chicago,IL,USA",
//     type: "Contract (Remote)",
//     duration: "09/2022 - 01/2023",
//     description1:
//       "Built an internal admin video editor web app that enabled non-technical users to edit and publish videos with a smoother workflow.",
//     description2: `Implemented core editor features (trim, merge, overlays/text, timeline controls) with predictable state updates after each edit.
// • Delivered Cloudinary upload pipeline for edited videos with progress indicators and resilient error handling
// • Implemented authentication + password reset flows for secure access
// • Tools: React, Node.js, FFMPEG, Cloudinary APIs, JavaScript`,
//     show: true,
//   },
];
