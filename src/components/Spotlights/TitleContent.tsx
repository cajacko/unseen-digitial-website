import * as React from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface IProps {
  title: string;
  children: React.ReactNode;
  center?: boolean;
}

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Heading = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

/**
 * Render a list of text with a title
 */
const TitleContent = ({ title, children, center }: IProps) => (
  <Container>
    <Heading>
      <Text text={title} type="h3" center={center} />
    </Heading>
    {children}
  </Container>
);

export default TitleContent;
