import React from 'react';
import { Form } from 'grommet';
import { TextInput } from '../../Form/TextInput/TextInput';
import { User } from '../../user/UserState';
import { Button } from '../../ui/Button/Button';
import { Grid, GridItem } from '../../Grid/Grid';
import { Select } from '../../Form/Select/Select';

import countries from './countries.json';

interface AddressProps {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: Partial<User>;
  error: string | null;
}

const AddressForm: React.FC<AddressProps> = props => {
  const { handleFormSubmit, handleFormChange, values, error } = props;

  if (!values) {
    return null;
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      {error && (
        <p>
          Error: <strong>{error}</strong>
        </p>
      )}

      <Grid>
        <GridItem sizeL={6}>
          <TextInput
            type="text"
            id="street"
            name="street"
            label="Street"
            required
            value={values.street || ''}
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <TextInput
            type="text"
            id="houseNumber"
            name="houseNumber"
            label="House number"
            required
            value={values.houseNumber || ''}
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <TextInput
            type="text"
            id="zipcode"
            name="zipcode"
            label="Zip code"
            required
            value={values.zipcode || ''}
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <TextInput
            type="text"
            id="city"
            name="city"
            label="City"
            required
            value={values.city || ''}
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <Select
            options={countries}
            id="country"
            name="country"
            label="Country"
            required
            placeholder="Select your country"
            value={values.country || ''}
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

export default AddressForm;
