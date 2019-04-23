import React from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';

import { User } from '../user/UserState';

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

      {values.photoURL && (
        <img
          src={values.photoURL}
          alt={values.displayName || ''}
          style={{ maxWidth: 100 }}
        />
      )}

      <FormField htmlFor="username" label="Username">
        <TextInput
          type="text"
          id="username"
          name="username"
          placeholder="username"
          disabled
          value={values.displayName || ''}
          onChange={handleFormChange}
        />
      </FormField>
      <FormField htmlFor="firstname" label="Firstname">
        <TextInput
          type="text"
          id="firstname"
          name="firstname"
          placeholder="firstname"
          required
          value={values.firstName}
          onChange={handleFormChange}
        />
      </FormField>
      <FormField htmlFor="middleName" label="Middel name">
        <TextInput
          type="text"
          id="middleName"
          name="middleName"
          placeholder="middleName"
          value={values.middleName}
          onChange={handleFormChange}
        />
      </FormField>
      <FormField htmlFor="lastname" label="Lastname">
        <TextInput
          type="text"
          id="lastname"
          name="lastname"
          placeholder="lastname"
          required
          value={values.lastName}
          onChange={handleFormChange}
        />
      </FormField>
      <FormField htmlFor="city" label="City">
        <TextInput
          type="text"
          id="city"
          name="city"
          placeholder="city"
          required
          value={values.city}
          onChange={handleFormChange}
        />
      </FormField>
      <FormField htmlFor="email" label="Email">
        <TextInput
          type="text"
          id="email"
          name="email"
          placeholder="email"
          value={values.email || ''}
          readOnly
        />
      </FormField>
      <Button primary type="submit" label="Save" />
    </Form>
  );
};

export default UserSettingsForm;
