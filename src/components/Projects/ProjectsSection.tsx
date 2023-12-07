import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import ProjectCard from "./ProjectCard";

const projects = [
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
    name: "Coffee Store",
    description:
      "SmThis i too. Used technologies: React, TS, react-slick, aos, styled-componentsth",
    webLink: "",
    githubLink: "",
    technologies: "React - Tailwind - Styled Components",
    img: "coffee",
  },
  {
    name: "Dolbi",
    description:
      "This is web application for purchasing NFTs, responsive ui is included too. ologies: React, TS, react-slick, aos, styled-components",
    webLink: "",
    githubLink: "",
    technologies: "React - Tailwind - Styled Components",
    img: "dolbi",
  },
  {
    name: "Dolbi",
    description:
      "This is web application for purchasing NFTs, respok, aos, styled-components",
    webLink: "",
    githubLink: "",
    technologies: "React - Tailwind - Styled Components",
    img: "dolbi",
  },
];

const ProjectsSection = () => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
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
    <StyledProjectSection>
      <p className="text-[18px]">FEATURED PROJECTS</p>
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
