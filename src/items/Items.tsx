import React, { Component } from 'react';
import Card from './Card';
import { Box } from 'grommet';

export interface Item {
  id: number;
  title: string;
  shortDescription: string;
  imgSrc: string;
}

const items: Item[] = [
  {
    id: 1,
    title: 'Top Technology Item',
    shortDescription: 'a very nice item',
    imgSrc: 'http://lorempixel.com/300/300/technics'
  },
  {
    id: 2,
    title: 'Top Transportation Item',
    shortDescription: 'somewhat better item',
    imgSrc: 'http://lorempixel.com/300/300/transport'
  },
  {
    id: 3,
    title: 'top Fashion Item',
    shortDescription: 'some other item',
    imgSrc: 'http://lorempixel.com/300/300/fashion'
  }
];
class Items extends Component {
  public render() {
    return (
      <Box direction="row" wrap justify="center">
        {items.map(item => (
          <Card {...item} key={item.id} />
        ))}
      </Box>
    );
  }
}

export default Items;
