import React, { useState } from 'react';
import { FileInputContainer, StyledFileInput, FileInputLabel, FileInputInner } from './FileInputStyle';

type FileInputProps = {
  id: string;
  label: string | JSX.Element;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type FileInputAllProps = React.InputHTMLAttributes<HTMLInputElement> & FileInputProps;

export const FileInput: React.FC<FileInputAllProps> = (props) => {
  const [value, setValue] = useState(props.value || '');

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <FileInputContainer>
      <FileInputInner hasValue={true}>
        <StyledFileInput
          id={props.id}
          name={props.name}
          value={value}
          type="file"
          accept={props.accept}
          disabled={props.disabled}
          readOnly={props.readOnly}
          autoFocus={props.autoFocus}
          placeholder={props.placeholder}
          required={props.required}
          onChange={onValueChange} />
        <FileInputLabel htmlFor={props.id}>{props.label}</FileInputLabel>
      </FileInputInner>
    </FileInputContainer>
  );
};