interface Props {
  text: string;
  onClick?: () => void;
}

const Badge: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="max-h-[36px] rounded-2xl border-[1px] border-gray-400"
    >
      <div className="w-full h-full p-1 px-[0.85rem] rounded-2xl text-xs">
        {text}
      </div>
    </button>
  );
};

export default Badge;
