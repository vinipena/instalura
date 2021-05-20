import React from 'react';
// eslint-disable-next-line import/named
import { render, screen } from '../../infra/test/testUtils';

import TextField from './TextField';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Ju"
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
