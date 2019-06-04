import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { Item } from './Items';
import { RootState } from '../store/RootState';
import { getItemAction, saveItemAction, getItemsAction } from './ItemActions';
import { ItemState } from './ItemReducer';
import { Api } from '../api/Api';
import { TradeStatus } from '../types/TradeStatus';
import { ItemOwnership } from '../types/ItemOwnership';
import { async } from 'q';

interface DispatchProps {
  getAllItems: () => void;
  getNewItem: (itemId: number) => void;
  saveItem: (item: Item) => void;
}

interface AddedMethods {
  getItemById: (item: number) => Promise<Item | null>;
  getMyItems: (ownerId: string) => Promise<Item[]>;
  getTradeById: (itemId: number) => Promise<ItemOwnership | null>;
  getTradeByTradeId: (itemId: number) => Promise<ItemOwnership[]>;
  requestTrade: (wantedItemId: number, offeringItemId: number) => Promise<void>;
  acceptTrade: (myItem: Item, theirItem: Item,
    myOwnershipItem: ItemOwnership, theirOwnershipItem: ItemOwnership) => Promise<void>;
  denyTrade: (myItem: Item, theirItem: Item,
    myOwnershipItem: ItemOwnership, theirOwnershipItem: ItemOwnership) => Promise<void>;
}

export interface WithItemProps extends
  RouteComponentProps<{ id: string }>,
  ItemState,
  DispatchProps,
  AddedMethods { }

export function withItem<T extends WithItemProps>(Component: React.ComponentType<T>) {
  class WrapperComponent extends React.Component<WithItemProps & T> {
    private api = new Api();

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
        <Component
          {...this.props}
          getItemById={this.getItemById}
          getMyItems={this.getMyItems}
          requestTrade={this.requestTrade}
          getTradeById={this.getTradeById}
          getTradeByTradeId={this.getTradeByTradeId}
          acceptTrade={this.acceptTrade}
          denyTrade={this.denyTrade}
        />
      );
    }

    private getItemById = async (itemId: number) => {
      return await this.api.getItemById(itemId);
    }

    private getMyItems = async (ownerId: string) => {
      return await this.api.getMyOwnedItems(ownerId);
    }

    private getTradeById = async (itemId: number) => {
      return await this.api.getTradeById(itemId);
    }

    private getTradeByTradeId = async (itemId: number) => {
      return await this.api.getTradeByTradeId(itemId);
    }

    private requestTrade = async (wantedItemId: number, offeringItemId: number) => {
      return new Promise(async (resolve, reject) => {
        try {
          await this.api.requestTrade(wantedItemId, offeringItemId, TradeStatus.TRADING);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }

    private acceptTrade = async (myItem: Item, theirItem: Item,
      myOwnershipItem: ItemOwnership, theirOwnershipItem: ItemOwnership) => {
      return new Promise(async (resolve, reject) => {
        try {
          await this.api.acceptTrade(myItem, theirItem, myOwnershipItem, theirOwnershipItem);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }

    private denyTrade = async (myItem: Item, theirItem: Item,
      myOwnershipItem: ItemOwnership, theirOwnershipItem: ItemOwnership) => {
      return new Promise(async (resolve, reject) => {
        try {
          await this.api.denyTrade(myItem, theirItem, myOwnershipItem, theirOwnershipItem);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
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
