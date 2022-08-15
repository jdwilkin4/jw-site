import {
  Hero,
  About,
  Articles,
  Contact,
  Media,
  Header,
  Projects,
} from "../exports";

function App() {
  return (
    <>
      <Header />
      <Hero />
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
