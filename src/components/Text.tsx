import * as React from 'react';
import styled from 'styled-components';
import { BLACK, Colors } from '../config/colors';
import textStyles, { Types, TypeStyleKeys } from '../config/textStyles';

interface IProps {
  text: string;
  type: Types;
  color?: Colors;
}

interface ISpanProps {
  color?: IProps['color'];
  type: IProps['type'];
}

/**
 * Apply styles from the type object
 */
const applyTypeStyle = (key: TypeStyleKeys) => ({ type }: ISpanProps) =>
  String(textStyles[type][key]);

const Span = styled.span<ISpanProps>`
  font-family: Helvetica, sans-serif;
  color: ${({ color }) => color || BLACK};
  font-size: ${applyTypeStyle('fontSize')}px;
  font-weight: ${applyTypeStyle('fontWeight')};
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

/**
 * Renders a simple piece of text, use as a component so we can have
 * all the text styles in 1 place
 */
const Text = ({ text, color, type }: IProps) => (
  <Span type={type} color={color}>
    {text}
  </Span>
);

export default Text;
