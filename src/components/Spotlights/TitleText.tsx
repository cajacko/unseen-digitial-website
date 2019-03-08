import * as React from 'react';
import Text from '../Text';
import TitleContent from './TitleContent';

interface IProps {
  title: string;
  text: string;
  centerTitle?: boolean;
  centerText?: boolean;
}

/**
 * Render a title and text
 */
const TitleText = ({
  title, text, centerTitle, centerText,
}: IProps) => (
  <TitleContent title={title} center={centerTitle}>
    <Text text={text} type="body1" center={centerText} />
  </TitleContent>
);

export default TitleText;
