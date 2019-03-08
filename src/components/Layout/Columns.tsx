import * as React from 'react';
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
}

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
}: IProps) => (
  <ContentContainer
    backgroundColor={backgroundColor}
    bottomPadding={!!bottomPadding}
    verticalOverlap={!!verticalOverlap}
    topPadding={!!topPadding}
    centerHorizontally={!!centerHorizontally}
  >
    {children}
  </ContentContainer>
);

export default Columns;
