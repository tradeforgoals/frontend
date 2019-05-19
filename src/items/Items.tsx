import React, { Component } from 'react';
import { Box, Text } from 'grommet';
import axios from '../axios';
import Masonry from 'react-masonry-component';
import { Advertisement } from '../Advertisements/Advertisement';
import { MasonryItem } from '../ui/Grid/GridStyle';
import { Api } from '../api/Api';

export interface Item {
  id: number;
  title: string;
  shortDescription: string;
  imgSrc: string;
  category: string;
}
export interface ItemState {
  items: Item[];
  error: string | null;
  loading: boolean;
}
class Items extends Component {
  public state: ItemState = {
    items: [],
    error: null,
    loading: false,
  };

  public componentDidMount = async () => {
    this.setState({ loading: true });
    try {
      const api = new Api();
      const result = await api.getItems();
      if (typeof result !== 'object') {
        // NOTE: This happens on Azure where /items returns the index page.
        throw new Error('invalid data, is the API returning json?');
      }
      this.setState({ error: null, loading: false, items: result });
    } catch (e) {
      console.error(e);
      this.setState({
        error: e.message,
        loading: false,
      });
    }
  }

  public render() {
    const { error, loading, items } = this.state;
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
              <Advertisement {...item} />
            </MasonryItem>
          ))}
        </Masonry>
      </div>
    );
  }
}

export default Items;
