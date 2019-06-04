import React, { useState } from 'react';
import { SelectContainer, StyledSelect, SelectLabel, SelectInner } from './SelectStyle';

type SelectProps = {
  id: string;
  label?: string | JSX.Element;
  options: { [key: string]: string };
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

type SelectAllProps = React.InputHTMLAttributes<HTMLSelectElement> & SelectProps;

export const Select: React.FC<SelectAllProps> = (props) => {
  const [value, setValue] = useState(props.value || '');

  const onValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <SelectContainer>
      <SelectInner hasValue={true}>
        <StyledSelect
          id={props.id}
          name={props.name}
          value={value}
          disabled={props.disabled}
          autoFocus={props.autoFocus}
          placeholder={props.placeholder}
          required={props.required}
          onChange={onValueChange}>
            {props.placeholder && 
              <option value="">{props.placeholder}</option>
            }
            {Object.keys(props.options).map((option, index) => {
              return (
                <option value={option} key={index}>{props.options[option]}</option>
              );
            })}
        </StyledSelect>
        {props.label && 
          <SelectLabel htmlFor={props.id}>{props.label}</SelectLabel>
        }
      </SelectInner>
    </SelectContainer>
  );
};