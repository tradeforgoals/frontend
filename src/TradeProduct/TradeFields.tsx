import React from 'react';
import { Form } from 'grommet';
import { TextInput } from '../Form/TextInput/TextInput';
import { Button } from '../ui/Button/Button';
import { Grid, GridItem } from '../Grid/Grid';
import { Quality } from '../types/Quality';
import { Select } from '../Form/Select/Select';
import { FileInput } from '../Form/FileInput/FileInput';
import { Item } from '../items/Items';

interface TradeProps {
  handleFormSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: Partial<Item>;
  error: string | null;
}

const TradeFields: React.SFC<TradeProps> = props => {
  const { handleFormSubmit, handleFormChange, values, error } = props;

  return (
    <Form onSubmit={handleFormSubmit}>
      {error && (
        <p>
          Error: <strong>{error}</strong>
        </p>
      )}

      <Grid>
        <GridItem>
          <TextInput
            type="text"
            id="title"
            name="title"
            label="Title"
            value={values.title || ''}
            required
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem>
          <TextInput
            type="text"
            id="shortDescription"
            name="shortDescription"
            label="Description"
            value={values.shortDescription || ''}
            required
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <Select
            options={Quality}
            type="text"
            id="quality"
            name="quality"
            label="Quality"
            value={values.quality || ''}
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <TextInput
            type="text"
            id="category"
            name="category"
            label="Category"
            value={values.category || ''}
            required
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <FileInput
            id="imgSrc"
            name="imgSrc"
            label="Photo URL"
            value={values.imgSrc || ''}
            required
            accept=".jpg,.jpeg.png,.gif"
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem>
          <Button
            as="button"
            type="submit"
            primary
            rounded
            larger
          >Save</Button>
        </GridItem>
      </Grid>
    </Form>
  );
};

export default TradeFields;
