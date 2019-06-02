import React from 'react';
import { Form } from 'grommet';
import { TextInput } from '../../Form/TextInput/TextInput';
import { User } from '../../user/UserState';
import { Button } from '../../ui/Button/Button';
import { Grid, GridItem } from '../../Grid/Grid';

interface UserSettingsProps {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: Partial<User> | null;
  error: string | null;
}

const UserSettingsForm: React.SFC<UserSettingsProps> = props => {
  const { handleFormSubmit, handleFormChange, values, error } = props;

  return (
    <Form className="form-exists" onSubmit={handleFormSubmit}>
      {error && (
        <p>
          Error: <strong>{error}</strong>
        </p>
      )}

      <Grid>
        <GridItem>
          <TextInput
            type="text"
            id="username"
            name="username"
            label="Username"
            value={values && values.displayName ? values.displayName : ''}
            disabled
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <TextInput
            type="text"
            id="firstname"
            name="firstname"
            label="Firstname"
            value={values ? values.firstName : ''}
            required
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <TextInput
            type="text"
            id="middleName"
            name="middleName"
            label="Middle name"
            value={values ? values.middleName : ''}
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <TextInput
            type="text"
            id="lastname"
            name="lastname"
            label="Lastname"
            value={values ? values.lastName : ''}
            required
            onChange={handleFormChange}
          />
        </GridItem>

        <GridItem sizeL={6}>
          <TextInput
            type="email"
            id="email"
            name="email"
            label="Email"
            value={values && values.email ? values.email : ''}
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

export default UserSettingsForm;
