import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Soniya",
  lastName: "Prasad",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer Engineer",
  avatar: "/images/avatar.jpg",

  location: "India/Bengaluru", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "X",
    icon: "x",
    link: "https://www.x.com/soniyadotprasad",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/soniyaprasad77",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/soniyaprasad",
  },

  {
    name: "Email",
    icon: "email",
    link: "mailto:soniyadotprasad@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Soniya, a software engineer at <InlineCode>
        <Link href="https://www.versa-networks.com" target="_blank" rel="noopener noreferrer">Versa Networks</Link>
      </InlineCode>
      , where I develop and maintain network security solutions. After hours, I 
      build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/soniya-prasad/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Soniya Prasad is a software engineer at Versa Networks and a recent graduate in Computer
        Science and Engineering. With hands-on experience in end-to-end software
        development, she loves problem-solving and is passionate about
        building efficient and scalable web applications. Soniya is continuously
        exploring innovative solutions to deliver optimal user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Versa Networks",
        timeframe: "Nov 2024 - Present",
        role: "Software Engineer 1",
        achievements: [
          <>
            Taking ownership of end-to-end features, from frontend design to
            backend implementation.
          </>,
          <>
            Contributing to the overall architecture and design of the Maestro
            platform.
          </>,
          <>
            Automating build, test, and deployment processes using tools like
            Jenkins, CI/CD pipelines, and Ansible.
          </>,
        ],
        images: [],
      },
      {
        company: "Travander",
        timeframe: "June 2024 - Aug 2024",
        role: "Frontend Engineer",
        achievements: [
          <>
            Managed state for the traveler module with the Context API,
            overseeing data flows across 40+ components and integrating REST
            APIs for efficient data handling.
          </>,
          <>
            Implemented form validation with React Hook Form & Zod, optimized
            infinite scroll for trips and bookings (improving load times by
            25%), and integrated secure payment processing with Razorpay for
            100+ daily transactions.
          </>,
        ],
        images: [],
      },
      {
        company: "Tublian",
        timeframe: "March 2024 - May 2024",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Built an AI ChatBot that provided personalized tutoring, answering
            over 10,000+ questions enhancing user learning experiences and
            increasing engagement by 40%.
          </>,
          <>
            Collaborated with the team to develop Tublian’s 8020 roadmap
            generator, boosting performance by 10%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Mahatma Gandhi Central University",
        description: <>Studied computer science and engineering.</>,
        timeframe: "Nov 2020 - Aug 2024",
        cgpa: "cgpa: 8.82",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Primary",
        description: <>HTML, CSS, JavaScript, React, Next.js, Node.js</>,
        images: [],
      },
      {
        title: "Secondary",
        description: (
          <>Redux toolkit, GraphQL, Git, Jest, MongoDB, SQL, Tailwind</>
        ),
        images: [],
      },
      {
        title: "Other",
        description: (
          <>
            Core Java (Java 8/9, Multithreading), CI/CD, Cloud (AWS/Azure/GCP),
            Microservices (REST API, SOAP, Event & Message-Based), Docker,
            Containerization, SOLID Principles, Caching (Redis), Monitoring
            (Grafana)
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // {
    //   src: "/images/gallery/img-11.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-12.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-13.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-14.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    {
      src: "/images/gallery/img-15.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-16.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-17.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-18.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-19.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-20.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-21.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-22.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-23.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
