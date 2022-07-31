const articles = [
  {
    id: "1",
    published: "February 5th, 2021",
    publisher: "Gatsby",
    title: "Voices of Gatsby: Fighting Back Against Imposter Syndrome",
    description:
      "Imposter syndrome can happen at any point in your career, and it can arrive in many different damaging disguises.",
    link: "https://www.gatsbyjs.com/blog/gatsby-voices-jessica-wilkins/",
  },
  {
    id: "2",
    published: "February 28th, 2022",
    publisher: "freeCodeCamp",
    title:
      "How I Went from Classical Musician to Software Developer using freeCodeCamp",
    description:
      "In June of 2020, I made the decision to learn how to code and successfully landed a job as a software developer.",
    link: "https://www.freecodecamp.org/news/how-i-went-from-a-classical-musician-to-software-developer-and-techinal-writer/",
  },
];
export default function Articles() {
  return (
    <>
      <header>
        <h1 className="text-5xl font-semibold text-gray-100 text-center my-4">
          Top Articles
        </h1>
        <p className="text-2xl rounded text-center my-6 bg-gray-800 md:w-1/2 mx-auto p-6">
          I have written for{" "}
          <a
            className="underline hover:text-blue-600"
            href="https://www.freecodecamp.org/news/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp News
          </a>
          ,{" "}
          <a
            className="underline hover:text-blue-600"
            href="https://www.thisdot.co/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            This Dot Labs
          </a>
          , and the{" "}
          <a
            className="underline hover:text-blue-600"
            href="https://www.gatsbyjs.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby Blog
          </a>
        </p>
      </header>
      <main className="flex flex-wrap justify-evenly mt-6">
        {articles.map(
          ({ id, published, description, title, link, publisher }) => (
            <article
              key={id}
              className="p-6 my-10 max-w-lg bg-gray-800 rounded-lg"
            >
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                {title}
              </h2>
              <p>
                Published {published} by {publisher}
              </p>
              <p className="my-6 font-normal text-gray-100">{description}</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-violet-500 hover:bg-violet-600 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read this article on {publisher}
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </article>
          )
        )}
      </main>
    </>
  );
}
