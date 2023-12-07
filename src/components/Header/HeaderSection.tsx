import styled from "styled-components";

const HeaderSection = () => {
  return (
    <StyledHeader id="about">
      <div className="flex items-center justify-between py-4">
        <p data-aos="fade-right" className="text-[24px]">
          ZL
        </p>
        <div data-aos="fade-left" className="header-nav flex gap-12">
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
        <p data-aos="fade-left">Hey, I'm</p>
        <p
          data-aos="fade-right"
          className="text-[90px] font-[500] header-content__title"
        >
          zaynlannister
        </p>
        <p data-aos="fade-right" className="mt-5">
          My name is Bekzod, and I'm an 18 years old developer. I aspire to
          constant growth in the field of web development. I enthusiastically
          study new technologies and materials to become a better developer.
          I've been independently studying web development for over 2 years. I
          would be happy to consider any offers and opportunities for
          professional growth.
        </p>
        <div data-aos="fade-down" className="mt-6">
          <a
            href="https://t.me/zaynlannister"
            target="_blank"
            className="flex w-fit cursor-pointer header-content__tg"
          >
            <span className="mr-2">Say hi</span>
            <img src="/img/line.svg" alt="img" />
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

    &__tg {
      transition: 200ms all;
      border-bottom: 1px solid #111;
      padding-bottom: 2px;

      &:hover {
        border-color: silver;
      }
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
