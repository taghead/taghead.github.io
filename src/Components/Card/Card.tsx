import "./card.css";

interface props {
  text?: string;
  textBody?: any;
  icon?: any;
  bgColor?: bgColor;
  bgColorBody?: bgColor;
  className?: string;
  classNameBody?: string;
}

export const Card = ({
  text = "Card - Title",
  textBody = "Lorem ipsum",
  icon = "",
  bgColor = "bg-blanched-almond",
  bgColorBody = "bg-pale-pink",
  className,
  classNameBody,
}: props) => {
  return (
    <div className={`card`}>
      <div className={`cardTitle round-top pop-shadow ${bgColor} ${className}`}>
        <div className="cardIcon">{icon}</div>
        <text>{text}</text>
      </div>
      <text
        className={`cardBody round-bottom bg-water pop-shadow ${bgColorBody} ${classNameBody}`}
      >
        {textBody}
      </text>
    </div>
  );
};
