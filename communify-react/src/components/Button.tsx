import { ButtonHTMLAttributes, FC } from "react";
import { memo } from "react";
import { ImSpinner8 } from "react-icons/im";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "outline" | "fill";
  children: string;
  loading?: boolean;
}

const Button: FC<Props> = ({
  theme,
  loading,
  children,
  className,
  ...rest
}) => {
  const themeClasses =
    theme === "fill"
      ? "bg-secondary-200 text-white hover:bg-secondary-300 "
      : "hover:text-white hover:bg-secondary-200 text-secondary-200 ";
  return (
    <>
      <button
        {...rest}
        className={
          "rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border border-secondary-200 " +
          themeClasses +
          className
        }
      >
        {/* {children}  */}
        {!loading ? (
          children
        ) : (
          <ImSpinner8 className="w-4 h-4 mx-auto animate-spin" />
        )}
      </button>
    </>
  );
};
Button.defaultProps = {
  theme: "fill",
  loading: false,
};
export default memo(Button);
