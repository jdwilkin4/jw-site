import { useEffect, useState } from "react";
import { Loader, ErrorMessage } from "../../exports";
import { FetchStatus } from "../../types/types";
import { MEDIA_API } from "../../constants";

export const Media: React.VFC = () => {
  const [status, setStatus] = useState<FetchStatus>("loading");
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    fetch(MEDIA_API)
      .then((res) => res.json())
      .then(
        (data) => {
          setMediaData(data);
          setStatus("success");
        },
        (error) => {
          setStatus("error");
          console.error(`There was an error fetching data: ${error}`);
        }
      );
  }, []);

  const showMedia = () => {
    switch (status) {
      case "error":
        return <ErrorMessage />;
      case "loading":
        return <Loader />;
      default:
        return mediaData.map(({ id, podcast, title, link }) => (
          <article
            key={id}
            className="mx-6 my-8 rounded-3xl bg-gray-800 p-4 text-center md:w-1/4"
          >
            <h3 className="text-2xl font-bold">{podcast}</h3>
            <h4 className="mt-6">{title}</h4>
            <div className="mt-10 mb-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                className="rounded-full bg-violet-500 hover:bg-violet-600 px-5 py-3 text-white"
              >
                Take a listen
              </a>
            </div>
          </article>
        ));
    }
  };

  return (
    <div id="media mb-32">
      <h2 className="text-5xl font-semibold text-gray-100 text-center my-4">
        Media
      </h2>

      <section className="flex flex-wrap justify-evenly mt-6">
        {showMedia()}
      </section>
    </div>
  );
};
