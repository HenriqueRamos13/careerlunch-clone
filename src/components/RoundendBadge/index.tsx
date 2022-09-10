interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

const RoundedBadge: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full shadow-lg shadow-gray-300 w-10 h-10 flex justify-center items-center border-[.5px] border-t-gray-100 border-l-gray-100 border-r-gray-300 border-b-gray-300"
    >
      {children}
    </button>
  );
};

export default RoundedBadge;
