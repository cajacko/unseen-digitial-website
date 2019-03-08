import * as React from 'react';
import styled from 'styled-components';
import { BLACK, WHITE } from '../../config/colors';
import Link from '../Link';
import Text from '../Text';

interface IProps {
  title: string;
  subTitle: string;
  linkText: string;
  linkUrl: string;
}

const Container = styled.section`
  display: flex;
  height: calc(100vh - 50px);
  width: 100vw;
  background-color: ${BLACK};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LinkSpacing = styled.div`
  margin-top: 20px;
`;

const SubTitleSpacing = styled.div`
  margin-top: 10px;
`;

/**
 * Render a giant piece of hero content
 */
const Hero = ({
  title, subTitle, linkText, linkUrl,
}: IProps) => (
  <Container>
    <Text type="h1" text={title} color={WHITE} />
    <SubTitleSpacing>
      <Text type="h2" text={subTitle} color={WHITE} />
    </SubTitleSpacing>
    <LinkSpacing>
      <Link text={linkText} url={linkUrl} theme="light" />
    </LinkSpacing>
  </Container>
);

export default Hero;
