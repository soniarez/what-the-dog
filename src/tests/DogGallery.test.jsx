import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import DogGallery from '../components/finderView/DogGallery';

/**
 * @vitest-environment jsdom
 */

describe('Dog Gallery Component', () => {
  it('renders text on page', () => {
    render(
      <Router>
        <DogGallery />
      </Router>
    );
    const subText = screen.getByText(
      'Search your favorite dogs by bread or sub-breed!'
    );
    expect(subText).toBeInTheDocument();
  });
});
