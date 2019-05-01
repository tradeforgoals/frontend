import React from 'react';
import { Categories as StyledCategories, CategoriesItem } from './CategoriesStyle';
import { withCategories, WithCategoriesProps } from './withCategories';
import { Box } from 'grommet';

type CategoriesAllProps = WithCategoriesProps;

const Categories: React.FunctionComponent<CategoriesAllProps> = (props) => {
  const { categories } = props;

  console.log(props);

  return (
    <StyledCategories>
      <Box
          direction="column"
          pad="medium"
      >
        {categories.data && categories.data.length > 0 &&
          <>
            {categories.data.sort((a, b) => a.order - b.order).map((category, index) => (
              <CategoriesItem href={category.url} key={index}>{category.name}</CategoriesItem>
            ))}
        </>}
      </Box>
    </StyledCategories>
  );
};

export default withCategories(Categories);