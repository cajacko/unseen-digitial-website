import * as React from 'react';
import styled from 'styled-components';
import ContentContainer, {
  BackgroundColors,
  Children,
} from './ContentContainer';

interface IProps {
  verticalOverlap?: boolean;
  topPadding?: boolean;
  children: Children;
  bottomPadding?: boolean;
  backgroundColor: BackgroundColors;
  centerHorizontally?: boolean;
  maxWidth?: boolean | number;
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 * Render the content in columns
 */
const Columns = ({
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
    bottomPadding={!!bottomPadding}
    verticalOverlap={!!verticalOverlap}
    topPadding={!!topPadding}
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

export default Columns;
