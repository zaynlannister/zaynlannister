import ContactSection from "./components/Contact/ContactSection";
import HeaderSection from "./components/Header/HeaderSection";
import InfoSection from "./components/Info/InfoSection";
import ProjectsSection from "./components/Projects/ProjectsSection";

const App = () => {
  return (
    <div className="my-container">
      <HeaderSection />
      <InfoSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
