import blackExcellenceImg from "../images/BEMP-homepage.webp";
export default function Projects() {
  return (
    <>
      <section id="projects" className="my-20">
        <div className="container md:py-20">
          <h2 className="text-5xl font-semibold text-gray-100 text-center ">
            Projects
          </h2>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://black-excellence-music-project.netlify.app/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src={blackExcellenceImg}
                className="w-full shadow rounded"
                alt="Black Excellence Music Project homepage"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
