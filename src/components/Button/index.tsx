import { classNames } from "../../utils/classNames";

interface Props {
  text: string;
  onClick?: () => void;
  selected?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  selected,
  secondary,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "p-2 px-[0.85rem] rounded-2xl shadow-xl shadow-gray-200 hover:shadow-gray-300 border-[1px] border-t-white border-l-white border-r-gray-300 border-b-gray-300",
        selected ? "border-none shadow-inner shadow-gray-400" : "",
        secondary ? "text-secondary font-bold" : "",
        disabled ? "pointer-events-none opacity-70" : "opacity-100"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
