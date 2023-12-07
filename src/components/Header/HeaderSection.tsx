import styled from "styled-components";

const HeaderSection = () => {
  return (
    <StyledHeader>
      <div className="flex items-center justify-between py-4">
        <p className="text-[24px]">ZL</p>
        <div className="header-nav flex gap-12">
          <a className="custom-link" href="#projects">
            Projects
          </a>
          <a className="custom-link" href="#contact">
            Contact
          </a>
          <a className="custom-link" href="#about">
            About
          </a>
        </div>
      </div>
      <div className="header-content my-24">
        <p>Hey, I'm</p>
        <p className="text-[90px] font-[500] header-content__title">
          zaynlannister
        </p>
        <p className="mt-5">
          My name is Bekzod, and I'm an 18 years old developer. I aspire to
          constant growth in the field of web development. I enthusiastically
          study new technologies and materials to become a better developer.
          I've been independently studying web development for over 2 years. I
          would be happy to consider any offers and opportunities for
          professional growth.
        </p>
        <div className="mt-6">
          <a
            href="https:/t.me/zaynlannister"
            target="_blank"
            className="flex hover:border-b hover:border-silver w-fit cursor-pointer transition"
          >
            <span className="mr-2">Say hi</span>
            <img src="/public/img/line.svg" alt="img" />
          </a>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  .header-content {
    &__title {
      background: linear-gradient(
        90deg,
        #9845e8 -1.72%,
        #33d2ff 54.05%,
        #dd5789 99.78%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 105px;
    }
  }

  @media (max-width: 615px) {
    .header-content {
      margin: 40px 0;
      &__title {
        font-size: 60px;
        line-height: 75px;
      }
    }
  }

  @media (max-width: 540px) {
    .header-nav {
      display: none;
    }
  }

  @media (max-width: 430px) {
    .header-content {
      &__title {
        font-size: 40px;
        line-height: 50px;
      }
    }
  }
`;

export default HeaderSection;
