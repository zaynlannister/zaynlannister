import styled from "styled-components";

const JobCard = (props: any) => {
  return (
    <StyledJobCard data-aos="fade-right">
      <div className="flex justify-between items-center">
        <p className="jobcard__title text-[24px]">{props.position}</p>
        <p className="jobcard__date">{props.from}</p>
      </div>
      <p className="text-[#6CACE4] mb-2">
        {props.companyName} / {props.location}
      </p>
      <p>{props.description}</p>
    </StyledJobCard>
  );
};

const StyledJobCard = styled.div`
  font-size: 14px;
  border-top: 1px solid #6e6e6e;
  margin-top: 20px;
  padding-top: 15px;

  @media (max-width: 500px) {
    .jobcard {
      &__title {
        font-size: 20px;
      }
      &__date {
        margin-top: 2px;
        font-size: 12px;
        color: #c3c3c3;
      }
    }
  }
`;

export default JobCard;
