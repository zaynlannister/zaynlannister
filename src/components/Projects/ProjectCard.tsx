import styled from "styled-components";

const ProjectCard = (props: any) => {
  return (
    <StyledProjectCard>
      <div>
        <img
          className="project-card__img"
          src={`/public/img/${props.img}.png`}
          alt="img"
        />
      </div>
      <div className="p-4 pt-2 project-card__content">
        <div className="min-h-[150px]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[20px]">{props.name}</p>
            <a target="_blank" href={props.githubLink}>
              <img src="/public/img/github.svg" alt="github" />
            </a>
          </div>
          <p className="text-[#C4C4C4]">{props.description}</p>
        </div>
        <div>
          <p className="text-[#6CACE4] text-[12px]">{props.technologies}</p>
        </div>
      </div>
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled.div`
  margin: 0 20px;

  .project-card {
    &__img {
      width: 100%;
      height: 170px;
      object-fit: cover;
    }

    &__content {
      border: 1px solid #414141;
      border-top: 0;
    }
  }
`;

export default ProjectCard;
