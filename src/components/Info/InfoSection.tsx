import styled from "styled-components";
import JobCard from "./JobCard";

const experienceData = [
  {
    companyName: "Ludum Edu",
    position: "Frontend Developer",
    description:
      "I was involved in the ERP web application for Uzneftegaz, where my tasks included - page layouts - using Axios for API interaction - implementing CRUD operations on admin pages - working with leaflet maps, polygons, geojson, geoman - close team communcation with backend developers.",
    from: "April 2023 - Present",
    location: "Uzbekistan - Tashkent",
  },
];

const InfoSection = () => {
  return (
    <StyledInfo>
      <p className="text-[18px]">EXPERIENCE</p>
      {experienceData.map((item, index) => (
        <JobCard key={index} {...item} />
      ))}
    </StyledInfo>
  );
};

const StyledInfo = styled.div``;

export default InfoSection;
