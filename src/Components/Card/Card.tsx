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
  bgColor = "bgBlanchedAlmond",
  className,
}: props) => {
  return (
    <div className={`card`}>
      <div className="cardTitle roundTop bgBlanchedAlmond popShadow">
        <div className="cardIcon">{icon}</div>
        <text>{text}</text>
      </div>
      <text className="cardBody roundBottom bgWater popShadow">{textBody}</text>
    </div>
  );
};
