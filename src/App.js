// import logo from './logo.svg';

import useLocalStorage from "react-use-localstorage"
import './app.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Works from './Works'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Navbar switchTheme={switchTheme} theme={theme} />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
