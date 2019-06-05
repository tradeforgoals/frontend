import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text } from 'grommet';
import { Item } from './Items';
import { CdnImage } from '../ui/Image/CdnImage';
import { Button } from '../ui/Button/Button';

const Card = ({
  id,
  category,
  title,
  shortDescription,
  imgSrc,
  quality,
}: Item) => {
  return (
    <Box background="white" wrap direction="row">
      <Box width="medium" pad="small">
        <CdnImage src={imgSrc} alt={title} width="100%" />
      </Box>
      <Box width="medium" pad="small">
        <Heading level="3">{title}</Heading>
        <Text>
          <b>description:</b> {shortDescription}
        </Text>
        <Text>
          <b>Category:</b> {category}
        </Text>
        <Text>
          <b>Quality:</b> {quality}
        </Text>
        <Link to={`/trade/start/${id}`}>
          <Button as="button" primary larger>
            Trade now!
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
