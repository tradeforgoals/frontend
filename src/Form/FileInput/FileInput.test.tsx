import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { FileInput } from './FileInput';

it('Should mount', () => {
  const input = shallow(
    <FileInput
      id="MyInput"
      label="My input"
    />
  );

  expect(input.dive().find('FileInputStyle__StyledFileInput[id="MyInput"]')).toHaveLength(1);
});