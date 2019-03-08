import * as React from 'react';
import styled from 'styled-components';
import { WHITE } from '../../config/colors';
import { BackgroundColors } from '../Layout/ContentContainer';
import Link from '../UI/Link';
import Text from '../UI/Text';

interface IProps {
  title: string;
  subTitle: string;
  linkText: string;
  linkUrl: string;
  backgroundColor: BackgroundColors;
  height: string;
}

interface IContainerProps {
  backgroundColor: IProps['backgroundColor'];
  height: string;
}

const Container = styled.section<IContainerProps>`
  display: flex;
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
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
  title,
  subTitle,
  linkText,
  linkUrl,
  backgroundColor,
  height,
}: IProps) => (
  <Container backgroundColor={backgroundColor} height={height}>
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
