import { Hero, About, Articles, Contact, Media, Navbar } from "../exports";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <About />
        <Articles />
        <Media />
      </main>

      <Contact />
    </>
  );
}

export default App;
