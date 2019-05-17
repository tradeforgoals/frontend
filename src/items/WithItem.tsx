import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { Item } from './Items';
import { RootState } from '../store/RootState';
import { getItemAction } from './ItemActions';

export interface ItemProps {
  error: string | null;
  loading: boolean;
  item?: Item;
}

interface StateProps {
  items: Item[];
  error: string | null;
  loading: boolean;
}

interface DispatchProps {
  getNewItem: (itemId: number) => void;
}

class WithItem extends Component<
  RouteComponentProps<{ id: string }> & {
    children(props: ItemProps): JSX.Element;
  } & StateProps &
    DispatchProps
> {
  public componentDidMount = async () => {
    const id = +this.props.match.params.id;
    const { getNewItem, items } = this.props;
    if (!items[id]) {
      getNewItem(id);
    }
  }

  public render() {
    const { children, items, error, loading } = this.props;
    const id = +this.props.match.params.id;
    let item;
    if (items[id]) {
      item = items[id];
    }
    return children({ error, loading, item });
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    items: state.items.items,
    loading: state.items.loading,
    error: state.items.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    getNewItem: (itemId: number) => dispatch(getItemAction(itemId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WithItem));
