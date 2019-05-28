import React from 'react';
import { Box, Heading, Text } from 'grommet';

import Card from './Card';
import { withItem, WithItemProps } from './WithItem';

interface ItemProps extends WithItemProps { }

const Item: React.FC<ItemProps> = (props) => {
  const { item, loading, error } = props;

  return (
    <Box>
      <Heading level="1" alignSelf="center">
        {item ? item.title : 'View item'}
      </Heading>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {item && <Card {...item} />}
    </Box>
  );
};

export default withItem(Item);
