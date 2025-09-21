import logo from './logo.svg'
import './App.css'
import { NavBar } from './components/navbar'
import { Banner } from './components/banner'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
