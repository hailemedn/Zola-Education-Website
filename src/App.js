import './App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import Youtube from './components/Youtube';
import Courses from './components/Courses';



function App() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <Youtube />
        <Courses />
      </main>
    </>
  );
}

export default App;
