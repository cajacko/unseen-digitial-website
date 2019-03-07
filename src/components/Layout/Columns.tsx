import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

/**
 * Render the content in columns
 */
const Columns = ({ children }: IProps) => <div>{children}</div>;

export default Columns;
