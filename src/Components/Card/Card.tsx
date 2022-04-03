import "./card.css";

interface props {
  text?: string;
  textBody?: any;
  icon?: any;
  bgColor?: bgColor;
  className?: string;
}

export const Card = ({
  text = "Card - Title",
  textBody = "Lorem ipsum",
  icon = "🏠",
  bgColor = "bg-blanched-almond",
  className,
}: props) => {
  return (
    <div className={`card`}>
      <div className="cardTitle round-top bg-blanched-almond pop-shadow">
        <div className="cardIcon">{icon}</div>
        <text>{text}</text>
      </div>
      <text className="cardBody round-bottom bg-water pop-shadow">
        {textBody}
      </text>
    </div>
  );
};
