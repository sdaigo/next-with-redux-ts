import { Container } from "./styles";

interface Props extends React.ComponentPropsWithoutRef<"button"> {}

const Button: React.FC<Props> = ({ onClick, disabled, children }) => {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {children}
    </Container>
  );
};

export default Button;
