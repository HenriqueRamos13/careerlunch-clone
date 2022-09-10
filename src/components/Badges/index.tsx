interface Props {
  text: string;
  onClick?: () => void;
}

const Badge: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-1 px-[0.85rem] max-h-[36px] rounded-2xl border-[1px] border-gray-400"
    >
      {text}
    </button>
  );
};

export default Badge;
