import { useState } from 'react';
import Calendar from '../components/Calendar';
import EventSidePanel from '../components/EventSidePanel';
import eventsData from '../data/events.json';

const CalendarPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1));
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
        setSelectedDate(null);
    };

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
        setSelectedDate(null);
    };

    const selectedEvents = selectedDate
        ? eventsData.data
            .filter(event => event.dateVenue === selectedDate)
            .map((event, index) => ({ ...event, originalIndex: index }))
        : [];

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-[#7A3D00]">
                        {currentDate.toLocaleString('default', { month: 'long' })} {year}
                    </h1>
                    <div className="flex gap-2">
                        <button onClick={prevMonth} className="px-4 py-2 font-semibold bg-[#7A3D00] text-white rounded-md  ">
                            Prev
                        </button>
                        <button onClick={nextMonth} className="px-4 py-2 font-semibold bg-[#7A3D00] text-white rounded-md ">
                            Next
                        </button>
                    </div>
                </div>

                <Calendar 
                    year={year} 
                    month={month} 
                    selectedDate={selectedDate} 
                    onDateSelect={setSelectedDate} 
                />
            </div>

            <EventSidePanel 
                selectedDate={selectedDate} 
                selectedEvents={selectedEvents} 
            />
        </div>
    );
};
export default CalendarPage;