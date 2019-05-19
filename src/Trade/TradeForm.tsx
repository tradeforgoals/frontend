import React from 'react';
import { Form } from 'grommet';
import { TextInput } from '../Form/TextInput/TextInput';
import { Button } from '../ui/Button/Button';
import { Grid, GridItem } from '../Grid/Grid';
import { TradeType, Quality } from '../types/Trade';
import { Select } from '../Form/Select/Select';

interface TradeProps {
  handleFormSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: Partial<TradeType>;
  error: string | null;
}

const TradeForm: React.SFC<TradeProps> = props => {
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
            disabled
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem>
          <TextInput
            type="text"
            id="description"
            name="description"
            label="Description"
            value={values.description || ''}
            required
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <Select
            options={Quality}
            type="text"
            id="category"
            name="category"
            label="Category"
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
          <TextInput
            type="text"
            id="photo"
            name="photo"
            label="Photo URL"
            value={values.photo || ''}
            required
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

export default TradeForm;
