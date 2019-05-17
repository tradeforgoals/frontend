import React from 'react';
import { Form } from 'grommet';
import { TextInput } from '../Form/TextInput/TextInput';

import { User } from '../user/UserState';
import { Button } from '../ui/Button/Button';

interface UserSettingsProps {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: Partial<User>;
  error: string | null;
}

const UserSettingsForm: React.SFC<UserSettingsProps> = props => {
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

      <TextInput
        type="text"
        id="username"
        name="username"
        label="Username"
        value={values.displayName || ''}
        disabled
        onChange={handleFormChange}
      />

      <TextInput
        type="text"
        id="firstname"
        name="firstname"
        label="Firstname"
        value={values.firstName || ''}
        required
        onChange={handleFormChange}
      />

      <TextInput
        type="text"
        id="middleName"
        name="middleName"
        label="Middle name"
        value={values.middleName || ''}
        onChange={handleFormChange}
      />

      <TextInput
        type="text"
        id="lastname"
        name="lastname"
        label="Lastname"
        value={values.lastName || ''}
        required
        onChange={handleFormChange}
      />

      <TextInput
        type="text"
        id="city"
        name="city"
        label="City"
        value={values.city || ''}
        onChange={handleFormChange}
      />

      <TextInput
        type="email"
        id="email"
        name="email"
        label="Email"
        value={values.email || ''}
        onChange={handleFormChange}
      />

      <Button 
        as="button" 
        type="submit"
        primary 
        rounded
        larger
      >Save</Button>
    </Form>
  );
};

export default UserSettingsForm;
