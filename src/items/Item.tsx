import React from 'react';
import { Box, Text } from 'grommet';

import Card from './Card';
import WithItem, { ItemProps } from './WithItem';

const Item = () => {
  return (
    <WithItem>
      {({ error, loading, item }: ItemProps) => (
        <Box>
          <h1>{item ? item.title : ''}</h1>
          {loading && <Text>Loading...</Text>}
          {error && <Text>{error}</Text>}
          {item && <Card {...item} />}
        </Box>
      )}
    </WithItem>
  );
};

export default Item;
