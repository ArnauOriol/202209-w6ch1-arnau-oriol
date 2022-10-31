interface ButtonProps {
  text: string;
  action: () => {};
}

const Button = ({ text, action }: ButtonProps): JSX.Element => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
