import React, { Component } from 'react';
import { Box, Text } from 'grommet';

import { Item as ItemInterface } from './Items';
import Card from './Card';
import axios from '../axios';
import { RouteComponentProps } from 'react-router';

export interface ItemState {
  item: ItemInterface | null;
  error: string | null;
  loading: boolean;
}

class Item extends Component<RouteComponentProps<{ id: string }>> {
  public state: ItemState = {
    error: null,
    loading: false,
    item: null
  };

  public componentDidMount = async () => {
    this.setState({ loading: true });
    const id = this.props.match.params.id;
    const response = await axios.get(`/items/${id}`);
    this.setState({ loading: false, error: null, item: response.data });
  };

  public render() {
    const { error, loading, item } = this.state;
    let title = '';
    if (loading) {
      title = 'Loading...';
    }
    if (item) {
      title = item.title;
    }
    if (error) {
      return (
        <Box direction="row" wrap justify="center">
          <Text>{error}</Text>
        </Box>
      );
    }
    return (
      <div>
        <h1>{title}</h1>
        {error && <Text>{error}</Text>}
        {item && <Card {...item} />}
      </div>
    );
  }
}

export default Item;
