import "./card.css";

interface props {
  text?: string;
  icon?: any;
  bgColor?: bgColor;
  className?: string;
}

export const Card = ({
  text = "Card - Title",
  icon = "🏠",
  bgColor = "bgBlanchedAlmond",
  className,
}: props) => {
  return (
    <div className={`card`}>
      <div className="cardTitle roundTop bgBlanchedAlmond popShadow">
        <div className="cardIcon">{icon}</div>
        <text>{text}</text>
      </div>
      <text className="cardBody roundBottom bgWater popShadow">aa</text>
    </div>
  );
};
