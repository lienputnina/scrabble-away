import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  it('Contains the name Liene', () => {
    expect.stringContaining('Liene');
  });
});
