import React, { useState, useEffect } from 'react';
import { Main, Layout } from '../styles/Layout';
import { Heading } from '../ui/Heading/Heading';
import { withItem, WithItemProps } from '../items/WithItem';
import { Item } from '../items/Items';
import { withRouter, RouteComponentProps } from 'react-router';
import { Alert } from '../ui/Alert/AlertStyle';
import { withUser, WithUserProps } from '../user/withUser';
import { Select } from '../Form/Select/Select';
import { Button } from '../ui/Button/Button';
import { toast } from 'react-toastify';
import history from '../store/history';

interface StartTradeFormRouteProps {
  itemId: string;
}

type StartTradeFormProps = WithItemProps & WithUserProps & RouteComponentProps<StartTradeFormRouteProps>;

const StartTradeForm: React.FC<StartTradeFormProps> = (props) => {
  const [error, setError] = useState<string>('');
  const [blockingError, setBlockingError] = useState<string>('');
  const [toTradeItem, setToTradeItem] = useState<Item | null>(null);
  const [myItems, setMyItems] = useState<{ [key: string]: string }>({});
  const [mySelectedItemId, setMySelectedItemId] = useState<string>('');
  const itemId = parseInt(props.match.params.itemId, 10);

  const makeTrade = () => {
    if (!mySelectedItemId) {
      setError('Pick one of your items');
      return;
    }

    props.requestTrade(itemId, parseInt(mySelectedItemId, 10)).then(() => {
      toast.success('Trade request sent!', { position: toast.POSITION.BOTTOM_RIGHT });
      history.push('/');
    });
  };

  const setMySelectedItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;

    if (id) {
      setMySelectedItemId(id);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = props.user.userDetails && props.user.userDetails.uid;
      let myOwnedItems: Item[] = [];

      // If no userId
      if (!userId) {
        setBlockingError('You are not authorized to make a trade.');
      } else {
        myOwnedItems = await props.getMyItems(userId);
      }

      // If param is no number
      if (!blockingError && isNaN(itemId)) {
        setBlockingError('Something went wrong while loading the item. Please try again later.');
      }

      // If item does not exist
      const tradingItem = await props.getItemById(itemId);
      if (!tradingItem) {
        setBlockingError('This item does not exist.');
      } else {
        setToTradeItem(tradingItem);
      }

      // If I got no items
      if (!blockingError && myOwnedItems.length === 0) {
        setBlockingError('You don\'t have any items to trade. Come back when you added an item.');
      }

      // If item is mine
      if (!blockingError && myOwnedItems.find(x => x.id === itemId) !== undefined) {
        setBlockingError('You cannot start by trading your own item.');
      }

      const myOwnedItemsObj: { [key: string]: string } = {};
      
      myOwnedItems.map(item => {
        myOwnedItemsObj[item.id.toString()] = item.title;
      });

      setMyItems(myOwnedItemsObj);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Main padding>
        <Heading level={1}>Start trade</Heading>

        {error &&
          <Alert type="error">{error}</Alert>
        }        
        
        {blockingError &&
          <Alert type="error">{blockingError}</Alert>
        }

        {toTradeItem && !blockingError && 
          <>
            <p>What would you like to trade the {toTradeItem.title} for?</p>

            <strong>My items</strong>
            <Select
              options={myItems}
              id="myItems"
              name="myItems"
              placeholder="Make a choice"
              value={''}
              onChange={setMySelectedItem}
            />
            <br />
            <Button 
              onClick={makeTrade}
              as="button"
              primary
              rounded
              larger
            >Request trade</Button>
          </>
        }
      </Main>
    </Layout>
  );
};

export default withRouter(withItem(withUser(StartTradeForm)));