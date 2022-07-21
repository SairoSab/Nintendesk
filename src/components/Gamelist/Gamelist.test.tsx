import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gamelist from './Gamelist';

describe('<Gamelist />', () => {
  it('should mount', () => {
    render(<Gamelist />);

    const gamelist = screen.getByTestId('Gamelist');

    expect(gamelist).toBeInTheDocument();
  });
  it('has a list of games', () => {
    const game = "Zelda"

    render(<Gamelist games={[game]} />);

    expect(screen.getByText(game)).toBeInTheDocument();
  })
});
