import profilePic from "../images/jw-profile.jpeg";

export default function About() {
  return (
    <div className="flex justify-evenly items-center mt-10">
      <div className=" md:w-2/4 p-16 sm:my-auto bg-gray-800 rounded-3xl space-y-10">
        <h1 className="text-5xl font-semibold text-gray-100">About Me</h1>
        <p>
          Jessica Wilkins is a classical musician turned Software Engineer.
          Prior to joining the tech industry, she spent her time running her own
          sheet music company{" "}
          <a
            className="underline decoration-blue-700 text-blue-600 hover:decoration-blue-900"
            href="https://www.jdwsheetmusic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JDW Sheet Music
          </a>{" "}
          as well as performing and teaching in Los Angeles, CA. She enjoys
          working with React and TypeScript. She is also a prolific technical
          writer for{" "}
          <a
            className="underline decoration-blue-700 text-blue-600 hover:decoration-blue-900"
            href="https://www.freecodecamp.org/news/author/jessica-wilkins/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp News
          </a>
          .
        </p>
      </div>
      <img
        className="hidden md:block rounded-full"
        src={profilePic}
        alt="Jessica Wilkins head shot"
      />
    </div>
  );
}
