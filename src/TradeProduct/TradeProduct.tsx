import React from 'react';
import { Item } from '../items/Items';
import { CdnImage } from '../ui/Image/CdnImage';
import { TradeProduct as StyledTradeProduct, TradeProductOverlay } from './TradeProductStyle';
import { Link } from 'react-router-dom';

export const TradeProduct: React.FC<Item> = (props) => {
  const { id, title, imgSrc } = props;

  return (
    <StyledTradeProduct>
      <Link to={`/items/${id}`}>
        <CdnImage src={imgSrc} alt={title} />
        <TradeProductOverlay>
          {title}
        </TradeProductOverlay>
      </Link>
    </StyledTradeProduct>
  );
};