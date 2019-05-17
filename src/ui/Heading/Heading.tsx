import React from 'react';
import { StyledHeading } from './HeadingStyle';

export interface HeadingProps {
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <>
      {/* 
      // @ts-ignore is actually valid */}
      <StyledHeading as={`h${props.level}`} level={props.level}>
        {props.children}
      </StyledHeading>
    </>
  );
};