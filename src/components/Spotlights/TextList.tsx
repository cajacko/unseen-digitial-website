import * as React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import TitleContent from './TitleContent';

interface IProps {
  title: string;
  items: string[];
}

const List = styled.ul`
  margin: 10px 0 0 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

/**
 * Render a list of text with a title
 */
const TextList = ({ title, items }: IProps) => (
  <TitleContent title={title}>
    <List>
      {items.map(text => (
        <ListItem key={text}>
          <Text text={text} type="body1" />
        </ListItem>
      ))}
    </List>
  </TitleContent>
);

export default TextList;
