import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Heading, Image, Stack, Text } from 'grommet';
import { Item } from './Items';

const Card = ({ id, title, shortDescription, imgSrc }: Item) => {
  return (
    <Stack anchor="top" margin="medium">
      <Box
        background="light-2"
        width="medium"
        elevation="medium"
        round="xsmall"
      >
        <Image src={imgSrc} alt={title} fit="cover" />
        <Heading level="3">{title}</Heading>
        <Text>{shortDescription}</Text>
        <Box border="top" pad="small">
          <NavLink to={`/items/${id}`}>
            <Button primary label="View Item" fill />
          </NavLink>
        </Box>
      </Box>
    </Stack>
  );
};

export default Card;
