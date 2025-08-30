import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mohammed",
  lastName: "Adel Ismaiel",
  name: `Mohammed Adel Ismaiel`,
  role: "AI Engineer – Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "mohammedadel288@gmail.com",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates about AI, data science, and engineering insights</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mohammed-adel-622b2020a/",
  },
  {
    name: "Portfolio",
    icon: "globe",
    link: "https://ismaiel.vercel.app",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming data into intelligent solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AI Healthcare</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest project
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Mohammed, an AI Engineer and Data Scientist from Cairo, Egypt.
      <br /> I specialize in building intelligent systems, ETL pipelines, and ML solutions 
      that turn complex data into actionable insights.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mohammed is a Cairo-based AI Engineer and Data Scientist with a passion for transforming complex data challenges
        into intelligent, scalable solutions. His work spans machine learning, natural language processing, 
        healthcare AI, and the development of data-driven systems that create real-world impact.
        <br /><br />
        With expertise in agentic AI frameworks, ETL pipeline architecture, and feature extraction techniques,
        Mohammed approaches problems with a "figure it out" mindset - combining research, experimentation, 
        and creative problem-solving to deliver sustainable solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Data Management Systems",
        timeframe: "May 2025 - Present",
        role: "AI Developer - Healthcare Transcription Solutions (Contract)",
        achievements: [
          <>
            Planned end-to-end medical transcription web application (React.js frontend, Flask backend) 
            for real-time audio consultations targeting <strong>95% accuracy</strong>.
          </>,
          <>
            Designed intelligent medical AI agent with LLMs & NLP to analyze clinical transcripts, 
            extract medical insights, and automate diagnostic reports (<strong>reduce documentation time by 60%</strong>).
          </>,
        ],
        images: [],
      },
      {
        company: "Data Management Systems",
        timeframe: "Jul 2023 - Jan 2024",
        role: "AI Engineer (Full-time)",
        achievements: [
          <>
            Architected ETL pipelines with Apache NiFi, reducing data processing time <strong>by 60%</strong>.
          </>,
          <>
            Built real-time analytics dashboards, improving Ministry of Health reporting efficiency <strong>by 40%</strong>.
          </>,
          <>
            Developed <strong>Open-Source Enterprise Data Analytics Solution</strong> (Metabase + NiFi), 
            boosting daily output <strong>by 66%</strong>.
          </>,
          <>
            Built <strong>Arabic conversational chatbot</strong> with LLMs, delivering multilingual NLP support.
          </>,
          <>
            Implemented <strong>RAG with vector databases</strong>, optimizing retrieval and content accuracy.
          </>,
        ],
        images: [],
      },
      {
        company: "The British University in Egypt",
        timeframe: "2023",
        role: "Capstone Project - Google's FER-2013 Dataset Challenge",
        achievements: [
          <>
            Achieved <strong>83% accuracy</strong> in Google's Facial Expression Recognition challenge, 
            representing an <strong>11% improvement</strong> over the benchmark (72.3%).
          </>,
          <>
            Conducted comprehensive benchmark analysis and applied data-centric methods with 
            outlier removal to improve dataset quality.
          </>,
          <>
            Developed novel single-network architecture using advanced Computer Vision and 
            Deep Learning techniques, earning <strong>Distinction (A+)</strong> and international recognition.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "The British University in Egypt",
        description: <>Bachelor of Science in Artificial Intelligence (Dual Degree with London South Bank University, UK) • Second Class Honours (1st Division) • 2019-2023</>,
      },
      {
        name: "Coursera & Professional Development",
        description: <>Deep Learning Specialization, Google Data Analytics Professional Certificate, Data Analysis Challenger Track (Ministry of Communications and IT, Egypt)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & AI",
        description: (
          <>Deep expertise in supervised/unsupervised learning, CNNs, LSTMs, Transformers, Computer Vision, and NLP. 
          Experienced with modern AI models including GPT-3.5/4, BERT, LLaMA, and RAG implementations.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "TensorFlow",
            icon: "tensorflow",
          },
          {
            name: "PyTorch",
            icon: "pytorch",
          },
        ],
        images: [],
      },
      {
        title: "Data Engineering & Analytics",
        description: (
          <>Architecting scalable ETL pipelines with Apache NiFi, building real-time analytics dashboards, 
          and implementing data warehousing solutions. Expert in data cleaning, wrangling, and visualization.</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "R",
            icon: "r",
          },
        ],
        images: [],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>Building modern web applications with React, Next.js, Node.js, and TypeScript. 
          Experience with cloud platforms (Azure, AWS) and database technologies (PostgreSQL, MongoDB).</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        images: [],
      },
      {
        title: "AI Frameworks & Tools",
        description: (
          <>Working with cutting-edge AI frameworks including LangChain, LlamaIndex, Ollama for building 
          intelligent agents and conversational AI systems. Experience with vector databases and RAG implementations.</>
        ),
        tags: [
          {
            name: "LangChain",
            icon: "link",
          },
          {
            name: "OpenAI",
            icon: "openai",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI and Machine Learning projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};



export { person, social, newsletter, home, about, blog, work };
