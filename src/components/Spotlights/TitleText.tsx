import * as React from 'react';
import Text from '../UI/Text';
import TitleContent from './TitleContent';

interface IProps {
  title: string;
  text: string;
  centerTitle?: boolean;
  centerText?: boolean;
  maxContentWidth?: number;
}

/**
 * Render a title and text
 */
const TitleText = ({
  title,
  text,
  centerTitle,
  centerText,
  maxContentWidth,
}: IProps) => (
  <TitleContent
    title={title}
    centerTitle={centerTitle}
    maxContentWidth={maxContentWidth}
  >
    <Text text={text} type="body1" center={centerText} />
  </TitleContent>
);

export default TitleText;
