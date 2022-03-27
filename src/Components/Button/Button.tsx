interface props {
  text?: string;
  className?: string;
}

export const Button = ({ className, text = "Button" }: props) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
