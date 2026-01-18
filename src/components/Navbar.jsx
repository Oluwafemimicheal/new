import { FaChevronUp } from "react-icons/fa"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScroll(true);
      
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${scroll ? "sticky top-2 w-max rounded-2xl bg-gray-800/95 text-white" : "hidden"} p-2 justify-center flex items-center mx-auto z-99 shadow relative`}>
      <div className='w-full px-0 lg:px-0 lg:max-w-6xl mx-auto flex justify-between items-center'>
        <div className="inline-flex gap-10">
          <ul className="flex justify-between w-full lg:w-[320px] text-xs lg:text-sm">
            <li><a href="#home" className="py-0.5 px-2 hover:bg-gray-500 rounded">Home</a></li>
            <li><a href="#about" className="py-0.5 px-2 hover:bg-gray-500 rounded">About</a></li>
            <li><a href="#project" className="py-0.5 px-2 hover:bg-gray-500 rounded">Project</a></li>
            <li><a href="#blog" className="py-0.5 px-2 hover:bg-gray-500 rounded">Blog</a></li>
            <li><a href="#contact" className="py-0.5 px-2 hover:bg-gray-500 rounded">Contact</a></li>
          </ul>
        </div>
      </div>
      <a href="#home" className="fixed right-5 bottom-5 p-3 bg-gray-800 rounded-2xl animate-bounce">
        <FaChevronUp/>
      </a>
    </nav>
  )
}

export default Navbar
