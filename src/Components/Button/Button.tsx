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
  bgColor = "bgBlanchedAlmond",
  bgColorHover = "bgTeaGreenHover",
  onClick = () => {},
  className,
}: props) => {
  return (
    <button
      className={`button round popShadow ${bgColor} ${bgColorHover} ${className}`}
      onClick={onClick}
    >
      <div className="buttonIcon">{icon}</div>
      <text className="buttonText">{text}</text>
    </button>
  );
};
