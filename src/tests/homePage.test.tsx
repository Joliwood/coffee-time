import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from '@jest/globals';
import Home from '../components/HomePage/HomePage';

const mockStore = configureStore([]);
const store: any = mockStore({ counter: [] });

afterEach(() => {
  cleanup();
});

describe('Checking Home page rendering', () => {
  // Render all component with all providers or context we want BEFORE to execute all tests
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should contain a header', () => {
    expect(screen.getByTestId('header')).not.toBeNull();
  });

  it('should contain a footer', () => {
    expect(screen.getByTestId('footer')).not.toBeNull();
  });
});
