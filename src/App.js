import './App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import Youtube from './components/Youtube';
import Courses from './components/Courses';
import ContactSection from './components/ContactSection';



function App() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <Youtube />
        <Courses />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
