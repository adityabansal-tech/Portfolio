/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Bansal",
  title: "Hi all, I'm Aditya",
  subTitle: emoji(
    "A passionate Full Stack & Data-driven Software Developer 🚀 currently pursuing my B.Tech in Computer Science Engineering. I love building scalable backend systems, REST APIs, and AI/data-powered applications with Python, Flask, and SQL."
  ),
  resumeLink: `${process.env.PUBLIC_URL}/resume.pdf`, // Bundled from your uploaded resume — see notes below
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/adityabansal-tech",
  linkedin: "https://www.linkedin.com/in/aditya-bansal-5576bb402",
  gmail: "adityabansal04031@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CSE STUDENT BUILDING SCALABLE BACKEND SYSTEMS, APIs & DATA-DRIVEN APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build scalable backend systems and REST APIs using Python, Flask, and SQLAlchemy"
    ),
    emoji(
      "⚡ Design relational database schemas and write optimized SQL queries (PostgreSQL / MySQL)"
    ),
    emoji(
      "⚡ Work with data analysis & visualization tools — Pandas, NumPy, Scikit-Learn, Power BI, Tableau"
    ),
    emoji(
      "⚡ Deploy and manage apps across AWS, Google Cloud, Microsoft Azure, and Oracle Cloud Infrastructure"
    ),
    emoji(
      "⚡ Integrate LLM / AI APIs (Google Gemini) into full-stack applications via structured prompt engineering"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++/c",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "google-cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ITS Engineering College (AKTU)",
      // logo: require("./assets/images/yourCollegeLogo.png"), // add your college logo image here (see notes below)
      subHeader: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      duration: "Expected Graduation: May 2027 · CGPA: 7.8/10.0",
     desc: "Currently in 4th year (penultimate year).",
     descBullets: [
    "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems (SQL), Object-Oriented Programming, Distributed Systems, and System Design."
  ]
    },
    {
      schoolName: "Maharaja Agrasen Public School",
      subHeader: "Senior Secondary (Class XII) — CBSE",
      duration: "Delhi · 2023",
      desc: "Scored 87.6% in CBSE Class 12 board examinations.",
      descBullets: []
    }
  ]
};
// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & Backend (Flask, SQLAlchemy, REST APIs)",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Analysis & SQL (Pandas, NumPy, Scikit-Learn)",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud & DevOps (AWS, Azure, GCP, OCI)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quantitative Research & Software Engineering Simulation",
      company: "J.P. Morgan Chase & Co.",
      companylogo: "https://logo.clearbit.com/jpmorganchase.com",
      date: "Jan 2026",
      desc: "Engineered programmatic financial data solutions using Python, optimizing algorithmic execution to handle high-frequency data streams under fast-paced production conditions.",
      descBullets: [
        "Applied strict software engineering principles to ensure code reliability, fault tolerance, and system scalability"
      ]
    },
    {
      role: "Data Analytics Virtual Intern",
      company: "Deloitte Australia (via Forage)",
      companylogo: "https://logo.clearbit.com/deloitte.com",
      date: "Feb 2026",
      desc: "Engineered an interactive data visualization system using Tableau, converting complex raw business datasets into scalable dashboards for executive-level performance tracking.",
      descBullets: [
        "Conducted advanced data cleaning, statistical analysis, and algorithmic filtering on large-scale datasets in Excel to identify business-critical KPIs"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "AI, DATA & FULL-STACK PROJECTS I'VE BUILT",
  projects: [
    {
      image: "https://opengraph.githubassets.com/1/adityabansal-tech/AI-resume-analyzer",
      projectName: "AI-Powered Resume Analyzer",
      projectDesc:
        "End-to-end NLP system that extracts technical skills and programmatically matches candidates to job descriptions. Custom keyword-matching algorithms and text-parsing pipelines improved screening efficiency by ~50%.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://ai-resume-analyzer-nine-lemon.vercel.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/adityabansal-tech/AI-resume-analyzer"
        }
      ]
    },
    {
      image: "https://opengraph.githubassets.com/1/adityabansal-tech/SROS-main",
      projectName: "Sustainable Routing Optimization System (SROS)",
      projectDesc:
        "Full-stack Flask web app that calculates real-time carbon emissions for transit routes and handles concurrent user API requests. Integrated Google Gemini LLM with structured prompt engineering to parse transit datasets, cutting data-processing overhead by 20%. Relational schema built with SQLAlchemy for high data integrity and low-latency lookups.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://sros-kohl.vercel.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/adityabansal-tech/SROS-main"
        }
      ]
    },
    {
      image: "https://opengraph.githubassets.com/1/adityabansal-tech/Sales-insights-analytics.",
      projectName: "Sales Insights & Relational Database Analytics",
      projectDesc:
        "Data analytics engine using Python and SQL to query and monitor large-scale historical sales KPIs. Optimized query parameters to compute revenue trends and product performance benchmarks, reducing manual processing overhead by ~40%.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://sales-insights-analytics-6cv32bjxi7gwtevdpth26q.streamlit.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/adityabansal-tech/Sales-insights-analytics."
        }
      ]
    }
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Certifications I've earned along the way",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "Amazon Web Services",
      image: "https://logo.clearbit.com/aws.amazon.com",
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Data Science Professional",
      subtitle: "Oracle",
      image: "https://logo.clearbit.com/oracle.com",
      imageAlt: "Oracle Logo",
      footerLink: []
    },
    {
      title: "Data Analytics & AI Certification",
      subtitle: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      imageAlt: "Microsoft Logo",
      footerLink: []
    },
    {
      title: "Data Analysis, Visualization, and SQL/Relational Databases",
      subtitle: "IBM",
      image: "https://logo.clearbit.com/ibm.com",
      imageAlt: "IBM Logo",
      footerLink: []
    },
    {
      title: "Python Essentials 1 & 2",
      subtitle: "Cisco",
      image: "https://logo.clearbit.com/cisco.com",
      imageAlt: "Cisco Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // No blog posts provided yet — set true and add entries above if you start writing
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // No talks provided yet — set true and add entries above if applicable
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // No podcast provided — set true and add an embed link above if applicable
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, an internship opportunity, or just want to say hi? My inbox is open for all.",

  email_address: "adityabansal04031@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", // No Twitter/X handle provided — replace with yours if you have one
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job/internship. Displayed as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
