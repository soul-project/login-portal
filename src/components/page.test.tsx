import { render } from '@testing-library/react';

import Page from './page';

describe(Page, () => {
  it('renders', () => {
    const { container } = render(
      <Page errors={[]}>
        <p>TEST</p>
      </Page>,
    );
    expect(container).toMatchSnapshot();
  });
});