import { MdEmail } from "react-icons/md";
import { FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between mb-10 mt-10">
      <h3 className="text-xl font-semibold tracking-wide">logo placement</h3>

      <ul className="flex items-center gap-6">
        <li>
          <a href="#">
            <FaYoutube className="cursor-pointer duration-200 transform text-2xl hover:scale-150 hover:text-[#A36A28]" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook className="cursor-pointer duration-200 transform text-2xl hover:scale-150 hover:text-[#A36A28]" />
          </a>
        </li>
        <li>
          <a href="#">
            <MdEmail className="cursor-pointer duration-200 transform text-2xl hover:scale-150 hover:text-[#A36A28]" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaWhatsapp className="cursor-pointer duration-200 transform text-2xl hover:scale-150 hover:text-[#A36A28]" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
