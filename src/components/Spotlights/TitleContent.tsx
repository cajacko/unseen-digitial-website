import * as React from 'react';
import styled from 'styled-components';
import { OVERLAP } from '../Layout/ContentContainer';
import Text from '../UI/Text';

interface IProps {
  title: string;
  children: React.ReactNode;
  centerTitle?: boolean;
  centerContent?: boolean;
  maxContentWidth?: number;
}

interface IContainerProps {
  maxContentWidth?: number;
  centerContent?: boolean;
}

const Container = styled.section<IContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${OVERLAP}px 20px;
  ${({ maxContentWidth, centerContent }) =>
    (maxContentWidth || centerContent ? 'align-items: center;' : '')}
`;

const Heading = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div<{ maxContentWidth?: number }>`
  display: flex;
  flex-direction: column;
  ${({ maxContentWidth }) =>
    (maxContentWidth ? `max-width: ${maxContentWidth}px;` : '')}
`;

/**
 * Render a list of text with a title
 */
const TitleContent = ({
  title,
  children,
  centerTitle,
  maxContentWidth,
  centerContent,
}: IProps) => (
  <Container maxContentWidth={maxContentWidth} centerContent={centerContent}>
    <Heading>
      <Text text={title} type="h3" center={centerTitle} />
    </Heading>
    <Content maxContentWidth={maxContentWidth}>{children}</Content>
  </Container>
);

export default TitleContent;
