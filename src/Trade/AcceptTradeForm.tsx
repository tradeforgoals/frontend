import React, { useState, useEffect } from 'react';
import { Main, Layout } from '../styles/Layout';
import { Heading } from '../ui/Heading/Heading';
import { withItem, WithItemProps } from '../items/WithItem';
import { Item } from '../items/Items';
import { withRouter, RouteComponentProps } from 'react-router';
import { Alert } from '../ui/Alert/AlertStyle';
import { withUser, WithUserProps } from '../user/withUser';
import { Button } from '../ui/Button/Button';
import { toast } from 'react-toastify';
import history from '../store/history';
import { ItemOwnership } from '../types/ItemOwnership';

interface AcceptTradeFormRouteProps {
  itemId: string;
}

type AcceptTradeFormProps = WithItemProps & WithUserProps & RouteComponentProps<AcceptTradeFormRouteProps>;

const AcceptTradeForm: React.FC<AcceptTradeFormProps> = (props) => {
  const [blockingError, setBlockingError] = useState<string>('');
  const [myItem, setMyItem] = useState<Item | null>(null);
  const [theirItem, setTheirItem] = useState<Item | null>(null);
  const [myOwnershipItem, setMyOwnershipItem] = useState<ItemOwnership | null>(null);
  const [theirOwnershipItem, setTheirOwnershipItem] = useState<ItemOwnership | null>(null);
  const itemId = parseInt(props.match.params.itemId, 10);

  const acceptTrade = () => {
    console.log(myItem, theirItem, myOwnershipItem, theirOwnershipItem);
    if (myItem && theirItem && myOwnershipItem && theirOwnershipItem) {
      props.acceptTrade(myItem, theirItem, myOwnershipItem, theirOwnershipItem).then(() => {
        toast.success('The trade was accepted!', { position: toast.POSITION.BOTTOM_RIGHT });
        history.push('/');
      });
    } else {
      toast.error('Something went wrong while processing the trade. Try again later.');
    }
  };

  const denyTrade = () => {
    if (myItem && theirItem && myOwnershipItem && theirOwnershipItem) {
      props.denyTrade(myItem, theirItem, myOwnershipItem, theirOwnershipItem).then(() => {
        toast.success('The trade was denied!', { position: toast.POSITION.BOTTOM_RIGHT });
        history.push('/');
      });
    } else {
      toast.error('Something went wrong while processing the trade. Try again later.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = props.user.userDetails && props.user.userDetails.uid;

      // If no userId
      if (!userId) {
        setBlockingError('You are not authorized to make a trade.');
      }

      // If param is no number
      if (!blockingError && isNaN(itemId)) {
        setBlockingError('Something went wrong while loading the item. Please try again later.');
      }

      // Is actually trading item
      const itemOwnershipItems = await props.getTradeByTradeId(itemId);
      if (!blockingError && itemOwnershipItems.length === 0) {
        setBlockingError('This item is not tradable');
      }

      // If item does not exist
      const theirTradingItem = await props.getItemById(itemId);
      const myTradingItem = await props.getItemById(itemOwnershipItems && itemOwnershipItems.length > 0
        ? itemOwnershipItems[0].id
        : -1
      );
      if (!myTradingItem || !theirTradingItem) {
        setBlockingError('This item does not exist.');
      } else {
        setMyItem(myTradingItem);
        setTheirItem(theirTradingItem);
      }

      const theirItemOwnership = await props.getTradeById(theirTradingItem ? theirTradingItem.id : -1);
      setMyOwnershipItem(itemOwnershipItems[0]);
      setTheirOwnershipItem(theirItemOwnership);

      // If item is mine
      // if (!blockingError && myOwnedItems.find(x => x.id === itemId) !== undefined) {
      //   setBlockingError('You cannot accept your own trade.');
      // }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Main padding>
        <Heading level={1}>Accept/deny trade</Heading>

        {blockingError &&
          <Alert type="error">{blockingError}</Alert>
        }

        {myItem && theirItem && !blockingError &&
          <>
            <p>Would you like to trade your&nbsp;
              <strong>{myItem.title}</strong> for their <strong>{theirItem.title}</strong>?
            </p>
            <br />
            <Button
              onClick={acceptTrade}
              as="button"
              primary
              rounded
              larger
            >Accept trade</Button>
            &nbsp;
            <Button
              onClick={denyTrade}
              as="button"
              secondary
              rounded
              larger
            >Deny trade</Button>
          </>
        }
      </Main>
    </Layout>
  );
};

export default withRouter(withItem(withUser(AcceptTradeForm)));