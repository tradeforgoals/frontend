import React from 'react';
import { Box, Heading, Text } from 'grommet';

import Card from './Card';
import WithItem, { ItemProps } from './WithItem';

const Item = () => {
  return (
    <WithItem>
      {({ error, loading, item }: ItemProps) => (
        <Box>
          <Heading level="1" alignSelf="center">
            {item ? item.title : 'View item'}
          </Heading>
          {loading && <Text>Loading...</Text>}
          {error && <Text>{error}</Text>}
          {item && <Card {...item} />}
        </Box>
      )}
    </WithItem>
  );
};

export default Item;
