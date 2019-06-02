import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import UserSettingsForm from './UserSettingsForm';

it('Should mount', () => {
  const form = shallow(
    <UserSettingsForm
      handleFormSubmit={() => {
        //
      }}
      handleFormChange={() => {
        //
      }}
      values={null}
      error={null} />
  );

  expect(form.find('.form-exists')).toHaveLength(1);
});

it('Should have empty values by default', () => {
  const form = shallow(
    <UserSettingsForm
      handleFormSubmit={() => {
        //
      }}
      handleFormChange={() => {
        //
      }}
      values={null}
      error={null} />
  );

  expect(form.find('[name="username"]').props().value).toEqual('');
  expect(form.find('[name="firstname"]').props().value).toEqual('');
  expect(form.find('[name="middleName"]').props().value).toEqual('');
  expect(form.find('[name="lastname"]').props().value).toEqual('');
  expect(form.find('[name="email"]').props().value).toEqual('');
});

it('Should be prefilled when needed', () => {
  const form = shallow(
    <UserSettingsForm
      handleFormSubmit={() => { 
        // 
      }}
      handleFormChange={() => { 
        //
      }}
      values={{
        displayName: 'TestUsername',
        firstName: 'TestFirstName',
        middleName: 'TestMiddleName',
        lastName: 'TestLastName',
        email: 'TestEmail'
      }}
      error={null} />
  );

  expect(form.find('[name="username"]').props().value).toEqual('TestUsername');
  expect(form.find('[name="firstname"]').props().value).toEqual('TestFirstName');
  expect(form.find('[name="middleName"]').props().value).toEqual('TestMiddleName');
  expect(form.find('[name="lastname"]').props().value).toEqual('TestLastName');
  expect(form.find('[name="email"]').props().value).toEqual('TestEmail');
});

it('Should be able to submit', () => {
  let isSubmitted = false;

  const form = shallow(
    <UserSettingsForm
      handleFormSubmit={() => { 
        isSubmitted = true;
      }}
      handleFormChange={() => { 
        //
      }}
      values={{
        displayName: 'TestUsername',
        firstName: 'TestFirstName',
        middleName: 'TestMiddleName',
        lastName: 'TestLastName',
        email: 'TestEmail'
      }}
      error={null} />
  );
  
  form.simulate('submit');

  expect(isSubmitted).toBeTruthy();
});