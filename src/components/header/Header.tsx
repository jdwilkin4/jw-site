import { useState } from "react";
import { MobileMenuIcon } from "../mobile-menu-icon/MobileMenuIcon";

export const Header: React.VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuOptions: string[] = [
    "Home",
    "About",
    "Projects",
    "Articles",
    "Media",
    "Contact",
  ];

  return (
    <nav className="bg-gray-800 sticky top-0 z-10 p-2">
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
          <div className="flex flex-wrap">
            <NavLinks options={menuOptions} />
          </div>
        )}
      </div>
    </nav>
  );
};

interface Props {
  options: string[];
}

const NavLinks: React.FC<Props> = ({ options }: Props) => {
  const [activeLink, setActiveLink] = useState<string>("");

  return (
    <>
      {options.map((subPage, id) => (
        <a
          onClick={() => setActiveLink(subPage)}
          className={`p-4 rounded ${activeLink === subPage ? "active" : ""}`}
          key={`${id}${subPage}`}
          href={subPage === "Home" ? "" : "#" + subPage.toLowerCase()}
        >
          {subPage}
        </a>
      ))}
    </>
  );
};
