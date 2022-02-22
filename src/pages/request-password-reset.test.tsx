import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RequestPasswordReset from './request-password-reset';

describe(RequestPasswordReset, () => {
  it('renders', async () => {
    const { container } = render(
      <MemoryRouter>
        <RequestPasswordReset />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
