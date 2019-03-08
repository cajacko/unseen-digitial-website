import * as React from 'react';
import styled from 'styled-components';
import { OVERLAP } from '../Layout/ContentContainer';
import Link from '../UI/Link';
import Text from '../UI/Text';

interface IProps {
  items: Array<{
    imageUrl: string;
    text: string;
    linkUrl: string;
    linkText: string;
    title: string;
    key: string;
    imageAlt: string;
  }>;
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 20px ${OVERLAP}px 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const size = 100;

const ImageContainer = styled.div`
  height: ${size}px;
  width: ${size}px;
  border-radius: ${size / 2}px;
  overflow: hidden;
  margin-bottom: 10px;
  background-size: cover;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.23);
`;

/**
 * Render a list of items where each has an image, text and link
 */
const ImageTextLink = ({ items }: IProps) => (
  <Container>
    {items.map(item => (
      <Item key={item.key}>
        <Content>
          <ImageContainer
            style={{ backgroundImage: `url('${item.imageUrl}')` }}
          />
          <Text text={item.title} type="h3" />
          <Text text={item.text} type="body1" />
        </Content>
        <Link text={item.linkText} url={item.linkUrl} theme="primary" />
      </Item>
    ))}
  </Container>
);

export default ImageTextLink;
