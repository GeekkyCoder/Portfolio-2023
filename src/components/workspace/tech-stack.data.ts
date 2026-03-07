import type { ComponentType } from "react";

import type { IconBaseProps } from "react-icons";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiGraphql,
  SiSocketdotio,
  SiAxios,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiReactbootstrap,
  SiGit,
  SiGitlab,
  SiGithub,
  SiPostman,
  SiTestinglibrary,
  SiJest,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import {
  TbApi,
  TbTerminal2,
  TbServer2,
  TbTestPipe,
  TbUserCheck,
} from "react-icons/tb";

type TechIcon = ComponentType<IconBaseProps>;

export type TechItem = {
  name: string;
  Icon: TechIcon;
};

export type TechCategory = {
  title: string;
  items: TechItem[];
};

export const defaultTechStackData: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Javascript", Icon: SiJavascript },
      { name: "Typescript", Icon: SiTypescript },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    title: "Frameworks and Libraries",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "Redux Toolkit", Icon: SiRedux },
    ],
  },
  {
    title: "Web Services",
    items: [
      { name: "REST API", Icon: TbApi },
      { name: "GraphQL", Icon: SiGraphql },
      { name: "Socket.io", Icon: SiSocketdotio },
      { name: "Axios", Icon: SiAxios },
    ],
  },
  {
    title: "UI Libraries",
    items: [
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Material UI", Icon: SiMui },
      { name: "Ant Design", Icon: SiAntdesign },
      { name: "React Bootstrap", Icon: SiReactbootstrap },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitLab", Icon: SiGitlab },
      { name: "GitHub", Icon: SiGithub },
      { name: "VS Code", Icon: VscCode },
      { name: "MobaXterm", Icon: TbTerminal2 },
      { name: "PM2", Icon: TbServer2 },
      { name: "Postman", Icon: SiPostman },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "React Testing Library", Icon: SiTestinglibrary },
      { name: "Jest", Icon: SiJest },
      { name: "Unit Testing", Icon: TbTestPipe },
      { name: "User Interaction Testing", Icon: TbUserCheck },
    ],
  },
];
