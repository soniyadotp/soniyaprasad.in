import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
  const person = {
    firstName: "Soniya",
    lastName: "Prasad",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("person.role"),
    avatar: "/images/avatar.jpg",
    location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
  };

  const newsletter = {
    display: true,
    title: <>{t("newsletter.title", { firstName: person.firstName })}</>,
    description: <>{t("newsletter.description")}</>,
  };

  const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/soniyaprasad77",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/soniyaprasad77/",
    },
    {
      name: "LeetCode",
      icon: "leetcode",
      link: "https://leetcode.com/u/soniyaprasad77/",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:soniyadotprasad@gmail.com",
    },
  ];

  const home = {
    label: t("home.label"),
    title: t("home.title", { name: person.name }),
    description: t("home.description", { role: person.role }),
    headline: <>{t("home.headline")}</>,
    subline: <>{t("home.subline")}</>,
  };

  const about = {
    label: t("about.label"),
    title: t("about.label"),
    description: t("about.description", {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
    tableOfContent: {
      display: true,
      subItems: true,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: t("about.intro.title"),
      description: <>{t("about.intro.description")}</>,
    },
    work: {
      display: true, // set to false to hide this section
      title: t("about.work.title"),
      experiences: [
        {
          company: "Travander",
          timeframe: t("about.work.experiences.Travander.timeframe"),
          role: t("about.work.experiences.Travander.role"),
          achievements: t(
            "about.work.experiences.Travander.achievements"
          ).split(";"),
          images: [
            {
              src: "/images/projects/project-01/cover-01.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: "Tublian",
          timeframe: t("about.work.experiences.Tublian.timeframe"),
          role: t("about.work.experiences.Tublian.role"),
          achievements: t("about.work.experiences.Tublian.achievements").split(
            ";"
          ),
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
          description: (
            <>
              {t(
                `about.studies.institutions.Mahatma Gandhi Central University.description`
              )}
            </>
          ),
          timeframe: <>{t(`Nov 2020 Aug 2024`)}</>,
          cgpa: <>{t(`cgpa: 8.82`)}</>,
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: t("about.technical.title"),
      skills: [
        {
          title: "Frontend",
          description: <>{t("about.technical.skills.Frontend.description")}</>,
          images: [
            {
              src: "/images/projects/project-01/cover-02.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/cover-03.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "Backend",
          description: <>{t("about.technical.skills.Backend.description")}</>,
          images: [
            {
              src: "/images/projects/project-01/cover-02.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/cover-03.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
      ],
    },
  };

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description", { name: person.name }),
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: person.name }),
  };

  const gallery = {
    label: t("gallery.label"),
    title: t("gallery.title"),
    description: t("gallery.description", { name: person.name }),
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
      {
        src: "/images/gallery/img-11.jpg",
        alt: "image",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-12.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-13.jpg",
        alt: "image",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img-14.jpg",
        alt: "image",
        orientation: "horizontal",
      },
    ],
  };
  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  };
};

export { createI18nContent };
