import React from 'react';
import { Item } from '../items/Items';
import { CdnImage } from '../ui/Image/CdnImage';
import { Advertisement as StyledAdvertisement, AdvertisementOverlay } from './AdvertisementsStyle';
import { Link } from 'react-router-dom';

export const Advertisement: React.FC<Item> = (props) => {
  const { id, title, imgSrc } = props;

  return (
    <StyledAdvertisement>
      <Link to={`/items/${id}`}>
        <CdnImage src={imgSrc} alt={title} />
        <AdvertisementOverlay>
          {title}
        </AdvertisementOverlay>
      </Link>
    </StyledAdvertisement>
  );
};