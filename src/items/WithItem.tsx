import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import axios from '../axios';
import { Item } from './Items';

export interface ItemProps {
  error: string | null;
  loading: boolean;
  item?: Item;
}

class WithItem extends Component<
  RouteComponentProps<{ id: string }> & {
    children(props: ItemProps): JSX.Element;
  }
> {
  public state: ItemProps = {
    error: null,
    loading: false,
    item: undefined
  };

  public componentDidMount = async () => {
    this.setState({ loading: true });
    const id = this.props.match.params.id;
    try {
      const response = await axios.get(`/items/${id}`);
      this.setState({ loading: false, error: null, item: response.data });
    } catch (e) {
      this.setState({ loading: false, error: e.message });
    }
  }

  public render() {
    const { children } = this.props;
    const { error, loading, item } = this.state;
    return children({ error, loading, item });
  }
}
export default withRouter(WithItem);
