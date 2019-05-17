import React, { useState } from 'react';
import { TextInputContainer, StyledTextInput, TextInputLabel, TextInputInner } from './TextInputStyle';

type TextInputProps = {
  id: string;
  label: string | JSX.Element;
  className?: string;
  onValueChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

type TextInputAllProps = React.InputHTMLAttributes<HTMLInputElement> & TextInputProps;

export const TextInput: React.FC<TextInputAllProps> = (props) => {
  const [value, setValue] = useState(props.value || '');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    if (props.onValueChange) {
      props.onValueChange(e);
    }
  };

  return (
    <TextInputContainer>
      <TextInputInner hasValue={!!value}>
        {/* <div className={classNames('a-text-input', className, value && 'a-text-input--has-value')}> */}
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
          onChange={onChange} />
        <TextInputLabel htmlFor={props.id}>{props.label}</TextInputLabel>
      </TextInputInner>
    </TextInputContainer>
  );
};