import * as React from 'react';
import styled from 'styled-components';
import { BLACK, GREY_LIGHT, WHITE } from '../../config/colors';

export type BackgroundColors = typeof WHITE | typeof GREY_LIGHT | typeof BLACK;

interface IDivProps {
  verticalOverlap: boolean;
  topPadding: boolean;
  bottomPadding: boolean;
  centerHorizontally: boolean;
  maxWidth?: boolean | number;
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
export const CONTENT_WIDTH = 800;

/**
 * Get the spacing or allowance for overlapping content
 */
const applySpacing = ({
  verticalOverlap,
  topPadding,
  bottomPadding,
}: IDivProps) => {
  if (verticalOverlap) {
    return `
      margin-top: -${OVERLAP}px;
      margin-bottom: -${OVERLAP}px;
    `;
  }

  let style = '';

  if (topPadding) style = `padding-top: ${OVERLAP}px;`;
  if (bottomPadding) style = `${style}padding-bottom: ${OVERLAP}px;`;

  return style;
};

/**
 * Apply the max width styling
 */
const applyMaxWidth = ({ maxWidth }: { maxWidth?: IProps['maxWidth'] }) => {
  if (!maxWidth) return '';

  if (maxWidth === true) return `max-width: ${CONTENT_WIDTH}px;`;

  return `max-width: ${maxWidth}px;`;
};

interface IContainerProps {
  backgroundColor: BackgroundColors;
  verticalOverlap: boolean;
}

const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  z-index: ${({ verticalOverlap }) => (verticalOverlap ? 2 : 1)};
`;

const Content = styled.div<IDivProps>`
  display: flex;
  flex-direction: column;
  ${({ centerHorizontally, maxWidth }) =>
    (centerHorizontally || maxWidth ? 'align-items: center' : '')}
  ${applySpacing}
`;

const MaxWidth = styled.div<{ maxWidth?: IProps['maxWidth'] }>`
  display: flex;
  flex-direction: column;
  ${applyMaxWidth}
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
  maxWidth,
}: IProps) => (
  <Container
    backgroundColor={backgroundColor}
    verticalOverlap={verticalOverlap}
  >
    <Content
      verticalOverlap={verticalOverlap}
      topPadding={topPadding}
      bottomPadding={bottomPadding}
      centerHorizontally={centerHorizontally}
      maxWidth={maxWidth}
    >
      <MaxWidth maxWidth={maxWidth}>
        {typeof children === 'function'
          ? children({ backgroundColor })
          : children}
      </MaxWidth>
    </Content>
  </Container>
);

export default ContentContainer;
