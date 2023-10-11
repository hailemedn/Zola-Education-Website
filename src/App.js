import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <AboutUs />
      </main>
    </ChakraProvider>
  );
}

export default App;
