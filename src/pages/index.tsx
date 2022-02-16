import { styled } from "@components/foundations";
import { Counter } from "@components/blocks";
import { Button } from "@components/elements";

import { increment, decrement } from "@states/counter";
import { countSelector, statusSelector } from "@states/counter/selector";
import { useAppDispatch, useAppSelector } from "@hooks/app";
import { increment as incrementAsync } from "@usecases/increment";

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
`;

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(countSelector);
  const status = useAppSelector(statusSelector);

  return (
    <Container>
      <Counter
        count={count}
        loading={status === "loading"}
        onDecrement={() => dispatch(decrement())}
        onIncrement={() => dispatch(increment())}
      />

      <hr />

      <Button onClick={() => dispatch(incrementAsync(10))}>
        Increment Async
      </Button>
    </Container>
  );
}
