import styled from "styled-components";

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <div className="flex justify-between">
        <p className="text-[18px]">CONTACT</p>
        <div className="flex gap-2">
          <a target="_blank" href="https:/github.com/zaynlannister">
            <img src="/img/github.svg" alt="github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bekzod-tulayev-4775221bb/"
          >
            <img width="24px" src="/img/linkedin.svg" alt="linkedin" />
          </a>
        </div>
      </div>
    </StyledContactSection>
  );
};

const StyledContactSection = styled.div`
  border-top: 1px solid #6e6e6e;
  padding: 40px 0;
  margin-top: 40px;
`;

export default ContactSection;
