import eventsData from '../data/events.json';

type CalendarProps = {
    year: number;
    month: number;
    selectedDate: string | null;
    onDateSelect: (dateStr: string) => void;
};

const Calendar = ({ year, month, selectedDate, onDateSelect }: CalendarProps) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendarDays = [
        ...Array(firstDayOfMonth).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
    ];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const formatDate = (day: number) =>
        `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

     const hasEvent = (day: number) => {
        const dateStr = formatDate(day);
        return eventsData.data.some(event => event.dateVenue === dateStr);
    };

    return (
        <div className="calendar-grid text-black">
            {weekDays.map(day => (
                <div key={day} className="calendar-header-day text-[#7A3D00]">{day}</div>
            ))}
           
            {calendarDays.map((day, index) => {
                if (!day) {
                    return <div key={`empty-${index}`} className="calendar-day empty" />;
                }
                const dateStr = formatDate(day);
                const isSelected = selectedDate === dateStr;

                return (
                    <div 
                        key={`day-${day}`} 
                        className={`calendar-day cursor-pointer ${isSelected ? 'ring-2 ring-[#7A3D00]' : ''}`}
                        onClick={() => onDateSelect(dateStr)}
                    >
                        <div className="mb-2 font-semibold text-[#7A3D00]">
                            {day}
                        </div>
                        {hasEvent(day) && (
                            <div className="flex justify-center">
                                <div className="event-dot"></div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Calendar;
