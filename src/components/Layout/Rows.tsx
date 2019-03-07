import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

/**
 * Render the content in rows
 */
const Rows = ({ children }: IProps) => <div>{children}</div>;

export default Rows;
