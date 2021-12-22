import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('Running Test for Button', () => {
  test('Check Button Disabled', () => {
    render(<Button text="Test Button" disabled />);
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
  });
});
