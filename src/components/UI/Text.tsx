import * as React from 'react';
import styled from 'styled-components';
import { BLACK, Colors } from '../../config/colors';
import textStyles, { Types, TypeStyleKeys } from '../../config/textStyles';

interface ISpanProps {
  color?: Colors;
  type: Types;
  center?: boolean;
}

interface IProps extends ISpanProps {
  text: string;
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
  ${({ center }) => (center ? 'text-align: center;' : '')}
`;

/**
 * Renders a simple piece of text, use as a component so we can have
 * all the text styles in 1 place
 */
const Text = ({
  text, color, type, center,
}: IProps) => (
  <Span type={type} color={color} center={center}>
    {text}
  </Span>
);

export default Text;
