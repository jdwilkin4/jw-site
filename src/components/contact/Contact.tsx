export const currentYear: number = new Date().getFullYear();
export const Contact: React.VFC = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col mt-20 bg-center bg-cover bg-no-repeat"
    >
      <div className="grid place-items-center mx-auto p-16 sm:my-auto bg-gray-800 rounded-3xl space-y-10">
        <h2 className="text-5xl font-semibold text-gray-100">Let's connect</h2>
        <div className="flex flex-col md:flex-row items-center justify-center  md:space-x-3 space-y-5 md:space-y-0">
          <a
            href="https://twitter.com/codergirl1991"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
          >
            <svg
              className="w-5 h-5 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Twitter logo</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            <span>Twitter</span>
          </a>
          <a
            rel="noreferrer noopener"
            href="https://github.com/jdwilkin4"
            target="_blank"
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              className="w-5 h-5 fill-current"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <span>GitHub</span>
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/jessica-wilkins-developer"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="text-lg mt-6 text-center">Copyright &copy; {currentYear}</p>
    </footer>
  );
};
