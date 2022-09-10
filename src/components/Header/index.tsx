import RoundedBadge from "../RoundendBadge";

interface Props {
  onClick?: () => void;
}

const Header: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <nav className="w-full py-8 mb-6"></nav>
      <nav className="w-full py-8 px-4 absolute top-0 left-0 flex flex-row gap-8 justify-between md:justify-start">
        <img
          src={"/assets/logo.png"}
          className="w-[150px] h-[25px] md:w-[150px]"
          alt="Logo"
        />
        <div className="flex-row items-center gap-8 hidden md:flex">
          <p className="text-gray-600 text-md">Top Employers</p>
          <p className="text-gray-600 text-md">Careers</p>
          <p className="text-gray-600 text-md">Blog</p>
          <p className="text-gray-600 text-md">FAQ</p>
          <p className="text-gray-600 text-md">For Employers</p>
        </div>
        <button
          onClick={onClick}
          className="rounded-full shadow-lg shadow-gray-400 w-16 h-16 justify-center items-center hidden md:flex absolute top-4 right-8 hover:shadow-gray-500"
        >
          <h2 className="text-3xl text-secondary font-bold">HR</h2>
        </button>
        <div className="block md:hidden justify-self-end">X</div>
      </nav>
    </>
  );
};

export default Header;
