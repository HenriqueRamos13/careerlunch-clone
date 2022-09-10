import { useRef, useState } from "react";
import { classNames } from "../../utils/classNames";

interface Props {
  label: string;
  onClick?: () => void;
}

const Input: React.FC<Props> = ({ label, onClick }) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => refInput.current?.focus()}
      className={classNames(
        "p-4 pb-[12px] shadow-inner w-full rounded-3xl border-[2px] border-t-transparent border-l-transparent border-b-white border-r-white relative animate-all transition-all",
        focused || value.length > 0 ? "shadow-gray-500" : "shadow-gray-400"
      )}
    >
      <p
        className={classNames(
          "absolute animate-all transition-all",
          focused || value.length > 0
            ? "left-4 top-2 text-sm text-gray-400"
            : "left-4 top-4 text-md text-gray-500"
        )}
      >
        {label}
      </p>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        ref={refInput}
        className="w-full h-full bg-primary focus:outline-none mt-[4px]"
      />
    </div>
  );
};

export default Input;
