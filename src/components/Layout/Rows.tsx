import * as React from 'react';
import styled from 'styled-components';
import ContentContainer, {
  BackgroundColors,
  Children,
} from './ContentContainer';

interface IProps {
  verticalOverlap?: boolean;
  bottomPadding?: boolean;
  topPadding?: boolean;
  children: Children;
  backgroundColor: BackgroundColors;
  centerHorizontally?: boolean;
  maxWidth?: boolean | number;
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Render the content in rows
 */
const Rows = ({
  children,
  verticalOverlap,
  topPadding,
  bottomPadding,
  backgroundColor,
  centerHorizontally,
  maxWidth,
}: IProps) => (
  <ContentContainer
    backgroundColor={backgroundColor}
    verticalOverlap={!!verticalOverlap}
    topPadding={!!topPadding}
    bottomPadding={!!bottomPadding}
    centerHorizontally={!!centerHorizontally}
    maxWidth={maxWidth}
  >
    {typeof children === 'function' ? (
      props => <Content>{children(props)}</Content>
    ) : (
      <Content>{children}</Content>
    )}
  </ContentContainer>
);

export default Rows;
