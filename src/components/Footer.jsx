export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-lg uppercase  font-bold mb-4 md:mb-0">
          Book Mania
        </h2>
        <div className="space-x-5">
          <a
            target="_blank"
            href="https://github.com/pxycknomdictator"
            className="hover:text-gray-400 transition duration-300"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/noman-dev"
            className="hover:text-gray-400 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 my-6"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-gray-500">Empowering readers since 2024.</p>
        <div className="flex space-x-4">
          <span
            href="#"
            className="cursor-pointer text-sm hover:text-gray-400 transition duration-300"
          >
            Privacy Policy
          </span>
          <span
            href="#"
            className="cursor-pointer text-sm hover:text-gray-400 transition duration-300"
          >
            Terms of Service
          </span>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2024 BookMania. All Rights Reserved.
      </div>
    </footer>
  );
};
