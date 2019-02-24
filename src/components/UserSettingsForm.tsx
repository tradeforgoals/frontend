import React from "react";

import { StyledLabel } from "../styles/Form";
import { ProfileState } from "./Profile";

interface UserSettingsProps {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: ProfileState;
  error: string | null;
}

const UserSettingsForm: React.SFC<UserSettingsProps> = (props) => {
  const { handleFormSubmit, handleFormChange, values, error } = props;
  return (
    <form onSubmit={handleFormSubmit}>
      {error && (
        <p>
          Error: <strong>{error}</strong>
        </p>
      )}
      <StyledLabel htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          required
          value={values.username || ""}
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
          value={values.firstname}
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
          value={values.lastname}
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
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
          value={values.email}
          onChange={handleFormChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
          value={values.password}
          onChange={handleFormChange}
        />
      </StyledLabel>
      <StyledLabel htmlFor="password_confirm">
        Repeat Password:
        <input
          type="password"
          id="password_confirm"
          name="password_confirm"
          placeholder="Repeat Password"
          required
          value={values.password_confirm}
          onChange={handleFormChange}
        />
      </StyledLabel>
      <button type="submit">Register</button>
    </form>
  );
};

export default UserSettingsForm;
