import { styled } from "@components/foundations";

export const Container = styled.button`
  padding: ${({ theme }) => theme.spacing(1, 2)};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.shape.radius.rg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[600]};
  }
`;
