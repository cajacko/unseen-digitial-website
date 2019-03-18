import * as React from 'react';
import Text from '../UI/Text';
import TitleContent from './TitleContent';

interface IProps {
  title: string;
  text1: string;
  text2: string;
  centerTitle?: boolean;
  centerText?: boolean;
  maxContentWidth?: number;
}

/**
 * Render a title and text
 */
const TitleText2 = ({
  title,
  text1,
  text2,
  centerTitle,
  centerText,
  maxContentWidth,
}: IProps) => (
  <TitleContent
    title={title}
    centerTitle={centerTitle}
    maxContentWidth={maxContentWidth}
  >
    <p><Text text={text1} type="body1" center={centerText} /></p>
    <p><Text text={text2} type="body1" center={centerText} /></p>
  </TitleContent>
);

export default TitleText2;
