export default function Media() {
  const podcastEpisodes: {
    id: string;
    podcast: string;
    title: string;
    link: string;
  }[] = [
    {
      id: "codenewbie1",
      podcast: "CodeNewbie",
      title: "How to transition from the arts into a career in tech",
      link: "https://www.codenewbie.org/podcast/how-to-transition-from-the-arts-into-a-career-in-tech",
    },
    {
      id: "vc1",
      podcast: "Virtual Coffee",
      title: "Growing your tech career through writing",
      link: "https://virtualcoffee.io/podcast/0407-jessica-wilkins",
    },
    {
      id: "webjoy1",
      podcast: "WebJoy",
      title: "S1 E2: A Fun, Approachable Way (Jessica / @codergirl1991)",
      link: "https://webjoy.fm/episode/season-1-episode-2-a-fun-approachable-way-jessica-wilkins",
    },
    {
      id: "harperdb1",
      podcast: "Harper DB",
      title:
        "S2 E5: From Classical Musician to Software Developer w/ Jessica Wilkins",
      link: "https://www.youtube.com/watch?v=loIOSCMt15M",
    },
    {
      id: "practicalDev1",
      podcast: "The Practical Dev",
      title: "Walkthrough Wednesday with The Career Changers",
      link: "https://www.youtube.com/watch?v=kKo0jxcqHc0",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-semibold text-gray-100 text-center my-4">
        Media
      </h1>

      <div className="flex flex-wrap justify-evenly mt-6">
        {podcastEpisodes.map(({ id, link, podcast, title }) => (
          <div
            key={id}
            className="mx-6 my-8 rounded-3xl bg-gray-800 p-4 text-center md:w-1/4"
          >
            <h2 className="text-2xl font-bold">{podcast}</h2>
            <h3 className="mt-6">{title}</h3>
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
          </div>
        ))}
      </div>
    </div>
  );
}
