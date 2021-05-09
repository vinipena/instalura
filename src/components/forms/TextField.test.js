import React from 'react';
import { render, screen } from '../../infra/test/testUtils';
import TextField from './TextField';

describe('<TextField />', () => {
  test('renders component', () => {
    render(

      <TextField
        placeholder="nome"
        value="Vinipena"
        onChange={() => {}}
        name="nome"
      />
      ,
    );

    // screen.debug();
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });
});
