import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-blue-600 text-2xl font-bold">MORENT</h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg shadow-sm px-4 py-2 w-full max-w-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Search icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            />
          </svg>
          <input
            type="text"
            placeholder="Search something here"
            className="ml-4 w-full bg-transparent border-none focus:ring-0 text-sm text-gray-700"
            aria-label="Search input"
          />
        </div>

        {/* Icon Section */}
        <div className="flex items-center space-x-6">
          {/* Heart Icon */}
          <button
            className="text-gray-600 hover:text-red-500"
            aria-label="Favorites"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 20.25l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              />
            </svg>
          </button>

          {/* Settings Icon */}
          <button
            className="text-gray-600 hover:text-blue-500"
            aria-label="Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15l9-5-9-5-9 5 9 5z"
              />
            </svg>
          </button>

          {/* Profile Avatar */}
          <Image
            src="/Image.png"
            alt="Profile"
            width={44}
            height={44}
            className="rounded-full border border-gray-300"
            layout="intrinsic"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
