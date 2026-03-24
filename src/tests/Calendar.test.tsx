import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Calendar from '../components/Calendar';
import * as EventContext from '../context/EventContext';

vi.mock('../context/EventContext', () => ({
    useEvents: vi.fn(),
}));

describe('Calendar', () => {
    it('renders the correct number of days for a given month', () => {
        vi.mocked(EventContext.useEvents).mockReturnValue({ events: [], addEvent: vi.fn() });
        
        render(<Calendar year={2026} month={4} selectedDate={null} onDateSelect={vi.fn()} />);

        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('31')).toBeInTheDocument();
    });

    it('calls onDateSelect when a day is clicked', () => {
        vi.mocked(EventContext.useEvents).mockReturnValue({ events: [], addEvent: vi.fn() });
        const mockOnDateSelect = vi.fn();

        render(<Calendar year={2026} month={4} selectedDate={null} onDateSelect={mockOnDateSelect} />);

        const day15 = screen.getByText('15').closest('.calendar-day') as HTMLElement;
        fireEvent.click(day15);

        expect(mockOnDateSelect).toHaveBeenCalledWith('2026-05-15');
    });

    it('displays dots for days with events', () => {
        vi.mocked(EventContext.useEvents).mockReturnValue({
            events: [{ dateVenue: '2026-05-20' }],
            addEvent: vi.fn()
        });

        render(<Calendar year={2026} month={4} selectedDate={null} onDateSelect={vi.fn()} />);

        const day20 = screen.getByText('20').closest('.calendar-day');
        expect(day20?.querySelector('.event-dot')).toBeInTheDocument();
    });
});
