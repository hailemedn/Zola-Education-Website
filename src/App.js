import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';


function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <AboutUs />
        {/* <ContactSection /> */}
      </main>
    </ChakraProvider>
  );
}

export default App;
