import { styled } from "@components/foundations";

export const Container = styled.span`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  display: block;
  font-weight: bold;
  font-size: calc(${({ theme }) => theme.typography.size.xxl} * 8);
`;
