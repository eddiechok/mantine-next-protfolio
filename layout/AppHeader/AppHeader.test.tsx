import { fireEvent, render, screen } from '@testing-library/react';

import AppHeader from '@/layout/AppHeader/AppHeader';

describe('navigation', () => {
  it('work tab navigate correctly', () => {
    render(<AppHeader />);
    const workElement = screen.getByText(/work/i);
    fireEvent.click(workElement);
    expect(window.location.pathname).toBe('/work');
  });
});
