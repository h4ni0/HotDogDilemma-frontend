import { useLocation } from "react-router-dom";

const Nav = (): JSX.Element => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <nav className="px-2 md:px-0 py-5 border-b-8 border-red-500 bg-orange-200 decoration-wavy">
      <div className="max-w-7xl flex items-center justify-between mx-auto">
        <a href="/">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-red-500">
            The 🌭 Dilemma
          </h2>
        </a>
        <a
          href={isHome ? "/add-new" : "/"}
          className="bg-red-500 hover:bg-red-600 text-white md:text-lg font-extrabold py-3 px-5 rounded transition-all"
        >
          {isHome ? "Provide an Answer" : "Back to Answers"}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
