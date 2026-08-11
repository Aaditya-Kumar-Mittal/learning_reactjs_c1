import { createContext } from "react";

const Subjects = [
  "Math",
  "Science",
  "History",
  "English",
  "Art",
  "Music",
  "Physical Education",
  "Computer Science",
  "Economics",
  "Geography",
];

const SubjectDescriptions = [
    {
        subject: "Math",
        description: "Study of numbers, quantities, and shapes"
    },
    {
        subject: "Science",
        description: "Study of the natural world and its phenomena"
    },
    {
        subject: "History",
        description: "Study of past events and their impact on the present"
    },
    {
        subject: "English",
        description: "Study of literature, writing, and communication"
    },
    {
        subject: "Art",
        description: "Study of visual arts and creative expression"
    },
    {
        subject: "Music",
        description: "Study of sound, rhythm, and musical composition"
    },
    {
        subject: "Physical Education",
        description: "Study of physical fitness and sports"
    },
    {
        subject: "Computer Science",
        description: "Study of computers and programming"
    },
    {
        subject: "Economics",
        description: "Study of production, distribution, and consumption of goods and services"
    },
    {
        subject: "Geography",
        description: "Study of the physical features and human activities of the Earth"
    }
];

export const SubjectList = createContext(Subjects);
