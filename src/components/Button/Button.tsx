import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action: () => void;
}

const Button = ({ text, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button onClick={action} className="button">
        {text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
