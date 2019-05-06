import React, { Component } from 'react';
import Card from './Card';
import { Box, Text } from 'grommet';
import axios from '../axios';

export interface Item {
  id: number;
  title: string;
  shortDescription: string;
  imgSrc: string;
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
      const result = await axios.get(`/items`);
      this.setState({ error: null, loading: false, items: result.data });
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
      <Box direction="row" wrap justify="center">
        {error && <Text>{error}</Text>}
        {items.map(item => (
          <Card {...item} key={item.id} />
        ))}
      </Box>
    );
  }
}

export default Items;
