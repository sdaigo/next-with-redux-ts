import { Button, Count } from "@components/elements";

import { Container, Row, CountHolder, ButtonHolder } from "./styles";

interface Props {
  count: number;
  loading: boolean;
  onIncrement: React.MouseEventHandler<HTMLButtonElement>;
  onDecrement: React.MouseEventHandler<HTMLButtonElement>;
}

const Counter: React.FC<Props> = ({
  count,
  loading,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Container>
      <CountHolder>
        {loading ? <span>Loading</span> : <Count>{count}</Count>}
      </CountHolder>
      <Row>
        <ButtonHolder>
          <Button onClick={onDecrement}>decrement</Button>
        </ButtonHolder>
        <ButtonHolder>
          <Button onClick={onIncrement}>increment</Button>
        </ButtonHolder>
      </Row>
    </Container>
  );
};

export default Counter;
