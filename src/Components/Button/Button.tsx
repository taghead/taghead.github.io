import "./button.css";

interface props {
  text?: string;
  icon?: any;
  bgColor?: bgColor;
  bgColorHover?: bgColorHover;
  onClick?: any;
  className?: string;
}

export const Button = ({
  text = "Button",
  icon = "🏠",
  bgColor = "bg-blanched-almond",
  bgColorHover = "bg-tea-green-hover",
  onClick = () => {},
  className,
}: props) => {
  return (
    <button
      className={`button flex align-items-center round pop-shadow border-none text-decoration-none ${bgColor} ${bgColorHover} ${className}`}
      onClick={onClick}
    >
      <div className="buttonIcon">{icon}</div>
      <text className="buttonText">{text}</text>
    </button>
  );
};
