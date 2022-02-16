import { styled } from "@components/foundations";

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacing(4, 2)};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CountHolder = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ButtonHolder = styled.div`
  margin: ${({ theme }) => theme.spacing(0, 2)};
`;
