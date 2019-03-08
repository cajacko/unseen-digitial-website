import * as React from 'react';
import styled from 'styled-components';
import { WHITE } from '../../config/colors';
import Text from '../UI/Text';

interface IProps {
  text: string;
}

const Container = styled.section`
  padding: 20px;
  background-color: ${WHITE};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.23);
`;

/**
 * Render some text in a sexy way
 */
const TextSpotlight = ({ text }: IProps) => (
  <Container>
    <Text text={text} type="body1" />
  </Container>
);

export default TextSpotlight;
