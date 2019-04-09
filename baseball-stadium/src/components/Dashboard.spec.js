import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('renders strike button', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/strike/i);
    });
    it('renders ball button', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/ball/i);
    });
})