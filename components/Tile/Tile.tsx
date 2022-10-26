import { FC } from "react";
import styled from "@emotion/styled";
import { borderRadius, boxShadow } from "@/components/styles";

type Props = {
  header: string;
  children?: string;
  styles?: string;
};
const Section = styled.section`
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
  ${borderRadius};
  padding: 1vmin 4vmin 4vmin;
`;
const Tile: FC<Props> = ({ header, children, styles }) => {
  return (
    <Section>
      <h2 className={`text-[4rem] bg-slate-400`}>{header}</h2>
      {children}
    </Section>
  );
};

export default Tile;
