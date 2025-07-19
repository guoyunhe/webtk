import { render, screen } from '@testing-library/react';
import { Webtk } from '.';

describe('Webtk', () => {
  it('render', async () => {
    render(<Webtk>foobar</Webtk>);
    await screen.findByText('foobar');
  });
});
