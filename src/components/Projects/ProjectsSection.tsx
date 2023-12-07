import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Google clone",
    description:
      "Google search clone application, You are able to google anything and it works the same as google search via using it's API.",
    webLink: "https://google-search-clone-six-eta.vercel.app/",
    githubLink: "https://github.com/zaynlannister/google-search-clone",
    technologies: "React - Tailwind - API",
    img: "google-clone",
  },
  {
    name: "Dolbi",
    description:
      "This is web application for purchasing NFTs, responsive ui is included.",
    webLink: "https://dolbi-landing.vercel.app/",
    githubLink: "https://github.com/zaynlannister/dolbi-landing",
    technologies: "React - Tailwind - Styled Components - Slick js",
    img: "dolbi",
  },
  {
    name: "Grocery Store",
    description:
      "Fresh groceries delivered to your doorstep. Convenient, reliable, and personalized shopping experience.",
    webLink: "https://grocery-store-landing.vercel.app/",
    githubLink: "https://github.com/zaynlannister/grocery-store-landing",
    technologies: "React - Tailwind - Styled Components - Slick js",
    img: "grocery-store",
  },
  {
    name: "Coffee Store",
    description:
      "This is landing web application with awesome design and user interface , dive into coffee world with us!",
    webLink: "https://coffee-shop-landing.vercel.app/",
    githubLink: "https://github.com/zaynlannister/coffee-shop-landing",
    technologies: "React - Tailwind - Styled Components",
    img: "coffee",
  },

  {
    name: "Calories Counter",
    description:
      "The Calories Counter is a web application to calculate daily caloric needs based on age, gender, height, weight, and activity level.",
    webLink: "https://calories-counter-zaynlannister.vercel.app/",
    githubLink: "https://github.com/zaynlannister/calories-counter",
    technologies: "React - Tailwind - Styled Components",
    img: "calories-counter",
  },
  {
    name: "Wine",
    description:
      "Web application that invites you to explore the exquisite world of wines.",
    webLink: "https://wine-react.vercel.app/",
    githubLink: "https://github.com/zaynlannister/wine-react",
    technologies: "React - Tailwind - Styled Components - Slick js",
    img: "wine",
  },
  {
    name: "Address Book",
    description:
      "Contacts Application with search, filter, (create, edit and remove)",
    webLink: "https://contacts-app-zaynlannister.vercel.app/",
    githubLink: "https://github.com/zaynlannister/contacts-app",
    technologies: "React - Tailwind - Styled Components - Slick js",
    img: "contacts",
  },
];

const ProjectsSection = () => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <StyledProjectSection id="projects">
      <p data-aos="fade-right" className="text-[18px]">
        FEATURED PROJECTS
      </p>
      <div className="mt-8">
        <Slider {...sliderSettings}>
          {projects.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </Slider>
      </div>
    </StyledProjectSection>
  );
};
const StyledProjectSection = styled.div`
  padding: 80px 0;
`;

export default ProjectsSection;
