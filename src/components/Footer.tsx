const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ffffff] py-8 ">
      <div className="container mx-auto grid grid-cols-4 gap-8 px-4 w-[1440px] h-[480px]">
        {/* Left Section */}
        <div>
          <h2 className="text-blue-500 font-bold font-[Plus-Jakarta-Sans] text-[32px]">MORENT</h2>
          <p className="mt-4 text-[#131313] text-sm w-[292px] h-[48px] text-justify">
            Our vision is to provide convenience and help increase your sales/businesses.
          </p>
        </div>

        {/* About Section */}
        <div className="w-[152px] h-[244px]">
          <h3 className="text-[#1A202C] font-semibold font-[Plus-Jakarta-Sans] text-[20px] w-[152px] h-[32px]">About</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>How it Works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="w-[152px] h-[244px]">
          <h3 className="text-[#1A202C] font-semibold font-[Plus-Jakarta-Sans] text-[20px] w-[152px] h-[32px]">Community</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a Friend</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="w-[152px] h-[244px]">
          <h3 className="text-[#1A202C] font-semibold font-[Plus-Jakarta-Sans] text-[20px] w-[152px] h-[32px]">Socials</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 my-8" />

      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Copyright Section */}
        <p className="text-gray-700 text-sm">©2022 MORENT. All rights reserved</p>

        {/* Links Section */}
        <div className="flex space-x-8 text-sm text-gray-700">
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
