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


// it('Should have empty values by default', () => {
//   const form = shallow(
//     <UserSettingsForm
//       handleFormSubmit={() => {
//         //
//       }}
//       handleFormChange={() => {
//         //
//       }}
//       values={null}
//       error={null} />
//   );

//   expect(form.find('[name="username"]').props().value).toEqual('');
//   expect(form.find('[name="firstname"]').props().value).toEqual('');
//   expect(form.find('[name="middleName"]').props().value).toEqual('');
//   expect(form.find('[name="lastname"]').props().value).toEqual('');
//   expect(form.find('[name="email"]').props().value).toEqual('');
// });