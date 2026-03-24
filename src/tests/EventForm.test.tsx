import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EventForm from '../components/EventForm';

describe('EventForm', () => {
    it('renders all form fields correctly', () => {
        render(<EventForm onSubmit={() => {}} />);
        expect(screen.getByText('Create New Event')).toBeInTheDocument();
        expect(screen.getByLabelText('Home Team')).toBeInTheDocument();
        expect(screen.getByLabelText('Away Team')).toBeInTheDocument();
        expect(screen.getByLabelText('Date')).toBeInTheDocument();
        expect(screen.getByLabelText('Time (UTC)')).toBeInTheDocument();
        expect(screen.getByLabelText('Competition Name')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Add Event to Calendar/i })).toBeInTheDocument();
    });

    it('updates input fields on change', () => {
        render(<EventForm onSubmit={() => {}} />);
        
        const homeTeamInput = screen.getByLabelText('Home Team') as HTMLInputElement;
        fireEvent.change(homeTeamInput, { target: { value: 'Manchester United' } });
        expect(homeTeamInput.value).toBe('Manchester United');

        const dateInput = screen.getByLabelText('Date') as HTMLInputElement;
        fireEvent.change(dateInput, { target: { value: '2026-05-15' } });
        expect(dateInput.value).toBe('2026-05-15');
    });

    it('calls onSubmit with correct data when submitted', () => {
        const mockOnSubmit = vi.fn();
        render(<EventForm onSubmit={mockOnSubmit} />);

        fireEvent.change(screen.getByLabelText('Home Team'), { target: { value: 'Manchester United' } });
        fireEvent.change(screen.getByLabelText('Away Team'), { target: { value: 'Arsenal' } });
        fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2026-05-15' } });
        fireEvent.change(screen.getByLabelText('Time (UTC)'), { target: { value: '15:00' } });
        fireEvent.change(screen.getByLabelText('Competition Name'), { target: { value: 'Premier League' } });
        fireEvent.click(screen.getByRole('button', { name: /Add Event to Calendar/i }));

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
            season: '2026',
            status: 'scheduled',
            timeVenueUTC: '15:00:00',
            dateVenue: '2026-05-15',
            originCompetitionName: 'Premier League',
            homeTeam: {
                name: 'Manchester United',
                officialName: 'Manchester United',
                abbreviation: 'MAN'
            },
            awayTeam: {
                name: 'Arsenal',
                officialName: 'Arsenal',
                abbreviation: 'ARS'
            },
            result: null
        });
    });
});
