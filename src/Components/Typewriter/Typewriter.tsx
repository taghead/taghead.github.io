import "./typewriter.css";

interface props {
  text?: any;
}

export const Typewriter = ({
  text = "Article 1: The law of the elements",
}: props) => {
  return <div className="typewriter">{text}</div>;
};
