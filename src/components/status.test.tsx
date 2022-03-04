import { render } from '@testing-library/react';

import Status from './status';

describe(Status, () => {
  it('renders', () => {
    const { container } = render(<Status status="STATUS" />);
    expect(container).toMatchSnapshot();
  });
});
