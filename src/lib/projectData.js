import { FaPython, FaReact, FaJava } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import {
  SiNumpy,
  SiPandas,
  SiFlask,
  SiPostgresql,
  SiExpress,
  SiTrpc,
  SiRiscv,
  SiTensorflow,
  SiApachemaven,
} from "react-icons/si";

/*
    Project Descriptions
*/
export const personalItems = {
  Yazify:
    "This is a web app that allows users to input a spotify song, and get 5 recommendations based on a large index. Currently I am planning to tune the recommendation algorithm and introduce a significantly larger index, and then plan to add more features such as recommendations based on playlists/user profiles, saving recommendations, etc. The algorithm currently is cosine similarity, I plan to introduce more sophisticated algorithms once the index size grows. ",
  "DSA Mini Projects":
    "This is a series of small projects that I work on whenever I want to do something interesting with a particular data structure or algorithm. Currently I implemented a Turing Machine in Python with a self implemented Linked List, and am working on a Persistent RedBlack Tree in C++ for point location, along with a small Computational Geometry library.",
  GreedyAnts:
    "For HackUCI 2022, built when my team of five and I had no web development experience. We were able to hack together a fullstack application that returned the cheapest recipes when provided user-inputted ingredients, with the majority of my contributions on the React frontend, helping with styling and routing.",
  Algos:
    "Notebook where I implement algorithms I learn in a series of courses, with the goal of building a graph algorithm/computational geometry visualzier.",
};

export const OSSItems = {
  "Patriots and Paws":
    "Fullstack web furniture management system built for the nonprofit Patriots and Paws. Contributed significantly on the frontend and backend with features including pagination, navigation, routing, styling, and more.",
  trash:
    "Fullstack volunteer management system that I am currently contributing to for the nonprofit Stand Up To Trash. Contributed significantly on the frontend and backend with features including the CheckIn page, the Volunteer Events page, Google Maps and Firebase integration, and much more.",
  antalmanac:
    "Contributed to AntAlmanac, a course scheduler for UC Irvine students maintained by the ICS Student Council. Set up a demo for push notifications and helped implement nodemailer.",
  "Abound Food Care":
    "I worked on this website as part of a small team during the summer, and helped implement pagination and several frontend features.",
  "Women's Safety Website":
    "This was the first website I worked on as part of a small team of five to help provide resources for women on campus. Ultimately the team dissolved before the project could be finished, but I gained valuable experience.",
};

export const courseItems = {
  capstone:
    "2nd Place Winner at the UC Irvine ICS Showcase, an NLP chatbot for Zuum Transportation (now WaveTMS) that enables broker to query for information about shipments using natural language.",
  compiler:
    "Compiler built with Java ANTLR, with parse tree, abstract syntax tree, IR representation, and code generation supported. Also supports semantic analysis.Compiler built with Java ANTLR, with parse tree, abstract syntax tree, IR representation, and code generation supported. Also supports semantic analysis.",
  teapot:
    "Developed 3D model for teapot based on scans, through process of reconstruction, mesh generation, mesh imporvements, and mesh combination through poisson reconstruction.",
  "CS 121 Search Engine":
    "This was a fully functioning search engine for CS 121 - Information Retrieval",
  "ICS 51 Wordle in Assembly":
    "A fully functioning game of Wordle built entirely in MIPS assembly",
};

/*
  Project Icon Rows
*/
export const yazifyIcons = [
  <FaPython size={40} color="white" />,
  <FaReact size={40} color="white" />,
  <SiNumpy size={40} color="white" />,
  <SiPandas size={40} color="white" />,
  <SiFlask size={40} color="white" />,
];
export const greedyAntsIcons = [
  <FaPython size={40} color="white" />,
  <FaReact size={40} color="white" />,
  <SiFlask size={40} color="white" />,
];
export const ctcIcons = [
  <FaReact size={40} color="white" />,
  <SiExpress size={40} color="white" />,
  <SiPostgresql size={40} color="white" />,
  <DiNodejs size={40} color="white" />,
];
export const icsscIcons = [
  <FaReact size={40} color="white" />,
  <SiTrpc size={40} color="white" />,
  <TbBrandMongodb size={40} color="white" />,
  <DiNodejs size={40} color="white" />,
];
export const cs121Icons = [
  <FaPython size={40} color="white" />,
  <SiNumpy size={40} color="white" />,
  <SiPandas size={40} color="white" />,
  <SiFlask size={40} color="white" />,
];
export const cs117Icons = [
  <FaPython size={40} color="white" />,
  <SiNumpy size={40} color="white" />,
  <SiPandas size={40} color="white" />,
];
export const cs142aIcons = [
  <FaJava size={40} color="white" />,
  <SiApachemaven size={40} color="white" />,
];
export const cs180Icons = [
  <FaPython size={40} color="white" />,
  <SiTensorflow size={40} color="white" />,
  <FaReact size={40} color="white" />,
  <SiFlask size={40} color="white" />,
  <TbBrandMongodb size={40} color="white" />,
];
export const ics51Icons = [<SiRiscv size={40} color="white" />];
