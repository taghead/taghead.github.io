import "./button.css";
interface props {
  text?: string;
  icon?: any;
  bgColor?:
    | "color-water"
    | "color-ivory"
    | "color-blanched-almond"
    | "color-pale-pink"
    | "color-tea-green";
  onClick?: any;
  className?: string;
}

export const Button = ({
  text = "Button",
  icon = "🏠",
  bgColor = "color-blanched-almond",
  onClick = () => {},
  className,
}: props) => {
  return (
    <button className={`button var(${bgColor})`} onClick={onClick}>
      <div className="buttonIcon">{icon}</div>
      <text className="buttonText">{text}</text>
    </button>
  );
};
