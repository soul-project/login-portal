import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import EmailConfirmation from './EmailConfirmation';

describe(EmailConfirmation, () => {
  const path = '/?token=CODE';

  it('renders', async () => {
    const emailConfirmationCall = jest
      .spyOn(axios, 'post')
      .mockResolvedValue({});

    const { container } = render(
      <MemoryRouter initialEntries={[path]}>
        <EmailConfirmation />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
    await waitFor(() => {
      expect(emailConfirmationCall).toHaveBeenCalledWith(
        'http://api.network.com/v1/users/verify-confirmation-token?token=CODE',
      );
    });
  });
});
