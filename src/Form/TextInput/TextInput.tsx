import React, { useState } from 'react';
import { TextInputContainer, StyledTextInput, TextInputLabel, TextInputInner } from './TextInputStyle';

type TextInputProps = {
  id: string;
  label: string | JSX.Element;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextInputAllProps = React.InputHTMLAttributes<HTMLInputElement> & TextInputProps;

export const TextInput: React.FC<TextInputAllProps> = (props) => {
  const [value, setValue] = useState(props.value || '');

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <TextInputContainer>
      <TextInputInner hasValue={!!value}>
        <StyledTextInput
          id={props.id}
          name={props.name}
          value={value}
          type={props.type}
          disabled={props.disabled}
          readOnly={props.readOnly}
          autoFocus={props.autoFocus}
          placeholder={props.placeholder}
          required={props.required}
          onChange={onValueChange} />
        <TextInputLabel htmlFor={props.id}>{props.label}</TextInputLabel>
      </TextInputInner>
    </TextInputContainer>
  );
};