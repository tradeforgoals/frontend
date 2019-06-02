import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { TextInput } from './TextInput';

it('Should mount', () => {
  const input = shallow(
    <TextInput
      id="MyInput"
      label="My input"
    />
  );
  const textInput = input.find('TextInputStyle__StyledTextInput[id="MyInput"]');

  expect(textInput).toHaveLength(1);
  expect(textInput.props().value).toEqual('');
});

it('Should be editable', () => {
  const input = shallow(
    <TextInput
      id="MyInput"
      label="My input"
    />
  );
  const textInput = input.find('TextInputStyle__StyledTextInput[id="MyInput"]');

  textInput.simulate('change', { currentTarget: { value: 'newValue' } });

  expect(input
    .update()
    .find('TextInputStyle__StyledTextInput[id="MyInput"]')
    .props()
    .value
  ).toEqual('newValue');
});