import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { Item } from './Items';
import { RootState } from '../store/RootState';
import { getItemAction, saveItemAction, getItemsAction } from './ItemActions';
import { ItemState } from './ItemReducer';

interface DispatchProps {
  getAllItems: () => void;
  getNewItem: (itemId: number) => void;
  saveItem: (item: Item) => void;
}

export interface WithItemProps extends
  RouteComponentProps<{ id: string }>,
  ItemState,
  DispatchProps { }

export function withItem<T extends WithItemProps>(Component: React.ComponentType<T>) {
  class WrapperComponent extends React.Component<WithItemProps & T> {
    public componentDidMount = async () => {
      this.props.getAllItems();

      const id = +this.props.match.params.id;
      const { getNewItem, items } = this.props;

      if (id && !items[id]) {
        getNewItem(id);
      }
    }

    public render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  const mapStateToProps = (state: RootState): Partial<ItemState> => {
    return {
      items: state.items.items,
      item: state.items.item,
      loading: state.items.loading,
      error: state.items.error,
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
    return {
      getAllItems: () => dispatch(getItemsAction()),
      getNewItem: (itemId: number) => dispatch(getItemAction(itemId)),
      saveItem: (item: Item) => dispatch(saveItemAction(item))
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore non-understandable TS issue
  )(withRouter(WrapperComponent));
}
