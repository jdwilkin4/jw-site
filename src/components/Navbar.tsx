import { useState } from "react";
import MobileMenuIcon from "./MobileMenuIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuOptions: string[] = [
    "Home",
    "About",
    "Articles",
    "Media",
    "Contact",
  ];

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MobileMenuIcon />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLinks options={menuOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinks options={menuOptions} block="block" />
          </div>
        )}
      </div>
    </nav>
  );
}
interface Props {
  options: string[];
  block?: string;
}

const NavLinks: React.FC<Props> = ({ options }: Props) => {
  return (
    <>
      {options.map((subPage) => (
        <a href={subPage === "Home" ? "" : "#" + subPage.toLowerCase()}>
          {subPage}
        </a>
      ))}
    </>
  );
};
