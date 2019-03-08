import * as React from 'react';
import styled from 'styled-components';
import { BLACK, GREY_LIGHT, WHITE } from '../../config/colors';

export type BackgroundColors = typeof WHITE | typeof GREY_LIGHT | typeof BLACK;

interface IDivProps {
  verticalOverlap: boolean;
  topPadding: boolean;
  bottomPadding: boolean;
  centerHorizontally: boolean;
}

type ChildrenFunc = (props: {
backgroundColor: BackgroundColors;
}) => React.ReactNode;

export type Children = ChildrenFunc | React.ReactNode;

interface IProps extends IDivProps {
  children: Children;
  backgroundColor: BackgroundColors;
}

export const OVERLAP = 40;

/**
 * Get the spacing or allowance for overlapping content
 */
const spacing = ({ verticalOverlap, topPadding, bottomPadding }: IDivProps) => {
  if (verticalOverlap) {
    return `
      margin-top: -${OVERLAP}px;
      margin-bottom: -${OVERLAP}px;
    `;
  }

  let style = '';

  if (topPadding) style = `padding-top: ${OVERLAP}px`;
  if (bottomPadding) style = `padding-bottom: ${OVERLAP}px`;

  return style;
};

const Container = styled.div<{ backgroundColor: BackgroundColors }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Content = styled.div<IDivProps>`
  display: flex;
  flex-direction: column;
  ${({ centerHorizontally }) =>
    (centerHorizontally ? 'align-items: center' : '')}
  ${spacing}
`;

/**
 * Render the content in rows
 */
const ContentContainer = ({
  children,
  verticalOverlap,
  topPadding,
  bottomPadding,
  backgroundColor,
  centerHorizontally,
}: IProps) => (
  <Container backgroundColor={backgroundColor}>
    <Content
      verticalOverlap={verticalOverlap}
      topPadding={topPadding}
      bottomPadding={bottomPadding}
      centerHorizontally={centerHorizontally}
    >
      {typeof children === 'function'
        ? children({ backgroundColor })
        : children}
    </Content>
  </Container>
);

export default ContentContainer;
