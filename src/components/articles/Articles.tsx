import { useEffect, useState } from "react";
import { Loader, ErrorMessage } from "../../exports";
import { FetchStatus } from "../../types/types";
import { ARTICLES_API } from "../../constants";
export const Articles: React.VFC = () => {
  const [postData, setPostData] = useState([]);
  const [status, setStatus] = useState<FetchStatus>("loading");

  useEffect(() => {
    fetch(ARTICLES_API)
      .then((res) => res.json())
      .then(
        (data) => {
          setPostData(data);
          setStatus("success");
        },
        (error) => {
          setStatus("error");
          console.error(`There was an error fetching data: ${error}`);
        }
      );
  }, []);

  const showArticles = () => {
    switch (status) {
      case "error":
        return <ErrorMessage />;
      case "loading":
        return <Loader />;
      default:
        return postData.map(
          ({ id, published, description, title, link, publisher }) => (
            <article
              key={id}
              className="p-6 my-10 max-w-lg bg-gray-800 rounded-lg"
            >
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                {title}
              </h3>
              <p>
                Published {published} by {publisher}
              </p>
              <p className="my-6 font-normal text-gray-100">{description}</p>
              <div className="text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className="inline-flex items-center py-2 px-3 justify-center w-full font-medium text-white bg-violet-700 hover:bg-violet-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
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
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          )
        );
    }
  };

  return (
    <section id="articles" className="mb-32">
      <h2 className="text-5xl font-semibold text-gray-100 text-center my-4">
        Top Articles
      </h2>
      <p className="text-2xl rounded text-center my-6 bg-gray-800 md:w-1/2 mx-auto p-6">
        I have written for{" "}
        <a
          className="underline hover:text-blue-600"
          href="https://www.freecodecamp.org/news/author/jessica-wilkins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          freeCodeCamp News
        </a>
        ,{" "}
        <a
          className="underline hover:text-blue-600"
          href="https://www.thisdot.co/author/-jessica-wilkins"
          target="_blank"
          rel="noopener noreferrer"
        >
          This Dot Labs
        </a>
        , and the{" "}
        <a
          className="underline hover:text-blue-600"
          href="https://www.gatsbyjs.com/contributors/jessica-wilkins"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby Blog
        </a>
      </p>

      <div className="flex flex-wrap justify-evenly mt-6">{showArticles()}</div>
    </section>
  );
};
