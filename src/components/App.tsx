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

      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
