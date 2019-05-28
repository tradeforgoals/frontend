import React, { Component } from 'react';
import { Box, Text } from 'grommet';
import Masonry from 'react-masonry-component';
import { TradeProduct } from '../TradeProduct/TradeProduct';
import { MasonryItem } from '../ui/Grid/GridStyle';
import { withItem, WithItemProps } from './WithItem';

export interface Item {
  id: number;
  title: string;
  shortDescription: string;
  imgSrc: string;
  quality: string;
  category: string;
}

interface ItemsProps extends WithItemProps { }

class Items extends Component<ItemsProps> {
  public render() {
    const { error, loading, items } = this.props;
    if (loading) {
      return (
        <Box direction="row" wrap justify="center">
          <Text>Loading...</Text>
        </Box>
      );
    }
    return (
      <div>
        {error && <Text>{error}</Text>}
        <Masonry>
          {items.map(item => (
            <MasonryItem key={item.id}>
              <TradeProduct {...item} />
            </MasonryItem>
          ))}
        </Masonry>
      </div>
    );
  }
}

export default withItem(Items);
