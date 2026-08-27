/**
 * BOARD OF DIRECTORS
 * ---------------------------------------------------------------------------
 * Sourced directly from the client's corporate profile PDF, including
 * photographs. TODO(CLIENT): confirm exact designations (the PDF lists
 * background/experience but not a formal title for each director beyond
 * "Non-executive Director" for the first) before publishing designations.
 */

export interface Director {
  name: string;
  designation: string;
  bulletPoints: string[];
  image: string;
}

export const directors: Director[] = [
  {
    name: "Ranjithkumar Kopparath Balan",
    designation: "Non-Executive Director",
    bulletPoints: [
      "20+ years of export trading and marketing experience",
      "Holds an MBA from Calicut University",
    ],
    image: "/images/directors/director-ranjithkumar.jpg",
  },
  {
    name: "Praveen Azhikodan Veetil",
    // TODO(CLIENT): confirm formal designation
    designation: "Director",
    bulletPoints: [
      "Wide experience in risk management",
      "Holds an MBA from Calicut University",
      "Started his career with HDFC Bank",
    ],
    image: "/images/directors/director-praveen.jpg",
  },
  {
    name: "Balakrishnan Roshit Komathheethal",
    // TODO(CLIENT): confirm formal designation
    designation: "Director",
    bulletPoints: [
      "Holds an MBA from Calicut University",
      "Began his career with the Kuwait Army",
      "Joined the Kurumbranad Group in 2020",
    ],
    image: "/images/directors/director-balakrishnan.jpg",
  },
  {
    name: "Vibeesh Meethale Vattakkandi",
    // TODO(CLIENT): confirm formal designation
    designation: "Director",
    bulletPoints: [
      "Holds an MBA from Calicut University",
      "Started his career with ICICI Bank",
      "Joined the Kurumbranad Group in 2020",
    ],
    image: "/images/directors/director-vibeesh.jpg",
  },
];
