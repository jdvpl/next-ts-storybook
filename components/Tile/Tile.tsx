import { FC } from "react";
import styled from "@emotion/styled";
import { borderRadius, boxShadow } from "@/components/styles";

type Props = {
  header: string;
  children?: string;
};
const Section = styled.section`
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
  ${borderRadius};
  color: ${({ theme }) => theme.font.regular};
  padding: 1vmin 4vmin 4vmin;
`;
const Tile: FC<Props> = ({ header, children }) => {
  return (
    <Section>
      <h2>{header}</h2>
      {children}
    </Section>
  );
};

export default Tile;
