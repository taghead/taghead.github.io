import "./button.css";
interface props {
  text?: string;
  icon?: any;
  bgColor?: "";
  onClick?: any;
  className?: string;
}

export const Button = ({
  text = "Button",
  icon = "🏠",
  onClick = () => {},
  className,
}: props) => {
  return (
    <button className="button" onClick={onClick}>
      <div className="buttonIcon">{icon}</div>
      <text className="buttonText">{text}</text>
    </button>
  );
};
