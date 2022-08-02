import {
  Hero,
  About,
  Articles,
  Contact,
  Media,
  Navbar,
  Projects,
} from "../exports";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <About />
        <Projects />
        <Articles />
        <Media />
      </main>

      <Contact />
    </>
  );
}

export default App;
