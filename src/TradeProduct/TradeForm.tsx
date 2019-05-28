import React, { useState } from 'react';
import { Main, Layout } from '../styles/Layout';
import TradeFields from './TradeFields';
import { Heading } from '../ui/Heading/Heading';
import { Quality } from '../types/Quality';
import { withItem, WithItemProps } from '../items/WithItem';
import { Item } from '../items/Items';

interface TradeFormProps extends WithItemProps { }

const TradeForm: React.FC<TradeFormProps> = (props) => {
  const [tradeData, setTradeData] = useState<Item>({
    id: 0,
    title: '',
    shortDescription: '',
    quality: '',
    category: '',
    imgSrc: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.saveItem(tradeData as Item);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const fieldName = e.target.name as keyof Partial<Item>;
    const uploadFile = e.target as HTMLInputElement;

    if (uploadFile.files && uploadFile.files.length) {
      setTradeData({
        ...tradeData,
        [fieldName]: uploadFile.files[0]
      });
    } else {
      setTradeData({
        ...tradeData,
        [fieldName]: e.target.value
      });
    }
  };

  return (
    <Layout>
      <Main padding>
        <Heading level={1}>Add product</Heading>
        <TradeFields
          handleFormSubmit={handleSubmit}
          handleFormChange={handleFormChange}
          values={tradeData}
          error={null}
        />
      </Main>
    </Layout>
  );
};

export default withItem(TradeForm);