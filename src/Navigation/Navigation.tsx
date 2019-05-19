import React from 'react';
import { StyledNavigation } from './NavigationStyle';
import { Box } from 'grommet';

export const Navigation: React.FunctionComponent = (props) => {
  return (
    <StyledNavigation>
      <Box
          direction="column"
          pad="medium"
          width="100%"
      >
        {props.children}
      </Box>
    </StyledNavigation>
  );
};