import React from 'react';

import { StyledLabel } from '../styles/Form';
import { User } from '../user/UserState';

interface UserSettingsProps {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: Partial<User>;
  error: string | null;
}

const UserSettingsForm: React.SFC<UserSettingsProps> = (props) => {
  const { handleFormSubmit, handleFormChange, values, error } = props;

  if (!values) {
    return null;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {error && (
        <p>
          Error: <strong>{error}</strong>
        </p>
      )}

      {values.photoURL && <img src={values.photoURL} alt={values.displayName || ''} style={{ maxWidth: 100 }} />}

      <StyledLabel htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          required
          value={values.username || ''}
          onChange={handleFormChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="firstname">
        Firstname:
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="firstname"
          required
          value={values.firstName}
          onChange={handleFormChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="middleName">
        Middle name:
        <input
          type="text"
          id="middleName"
          name="middleName"
          placeholder="middleName"
          required
          value={values.middleName}
          onChange={handleFormChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="lastname">
        Lastname:
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="lastname"
          required
          value={values.lastName}
          onChange={handleFormChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="city">
        City:
        <input
          type="text"
          id="city"
          name="city"
          placeholder="city"
          required
          value={values.city}
          onChange={handleFormChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          value={values.email || ''}
          readOnly={true}
        />
      </StyledLabel>
      <button type="submit">Register</button>
    </form>
  );
};

export default UserSettingsForm;
