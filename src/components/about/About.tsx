import profilePic from "../../images/jw-profile.webp";

export default function About() {
  return (
    <section id="about" className="flex justify-evenly items-center mt-10">
      <div className="md:w-2/4 p-16 sm:my-auto bg-gray-800 rounded-3xl space-y-10">
        <h2 className="text-5xl font-semibold text-gray-100">About Me</h2>
        <p className="text-xl leading-10">
          I am a classical musician turned Software Engineer. Prior to joining
          the tech industry, I spent my time running my own sheet music company{" "}
          <a
            className="underline hover:text-blue-600"
            href="https://www.jdwsheetmusic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JDW Sheet Music
          </a>{" "}
          as well as performing and teaching in Los Angeles, CA. I enjoy working
          with React and TypeScript. I am also a prolific technical writer for{" "}
          <a
            className="underline hover:text-blue-600"
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
    </section>
  );
}
