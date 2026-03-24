import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../pages/Navbar';

describe('Navbar', () => {
    it('renders the brand name', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        expect(screen.getByText('Sports Events Calendar')).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        expect(screen.getByRole('link', { name: 'Calendar' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Add Event' })).toBeInTheDocument();
    });
});
