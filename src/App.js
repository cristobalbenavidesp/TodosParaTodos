import AboutUs from "./components/AboutUs";
import CrowdFoundingInfo from "./components/CrowdFoundingInfo";
import FrontPage from "./components/FrontPage";
import MockUps from "./components/MockUps";
import { ModalContextProvider } from "./context/ModalContext";
import { AppContextProvider } from "./context/AppContext";
import Hr from "./components/Hr";
import { AboutUsContextProvider } from "./context/AboutUsContext";
import ContactPage from "./components/ContactPage";
import { ContactContextProvider } from "./context/ContactContext";

function App() {
  return (
    <AppContextProvider>
      <ModalContextProvider>
        <div className="w-screen h-fit flex flex-col bg-red-900">
          <FrontPage />
          <Hr />
          <AboutUsContextProvider>
            <AboutUs />
          </AboutUsContextProvider>
          <Hr />
          <MockUps />
          <Hr />
          <CrowdFoundingInfo />
          <Hr />
          <ContactContextProvider>
            <ContactPage />
          </ContactContextProvider>
        </div>
      </ModalContextProvider>
    </AppContextProvider>
  );
}

export default App;
