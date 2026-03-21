import React, { createContext, useContext, useState } from 'react';
import initialEventsData from '../data/events.json';

type EventContextType = {
    events: any[];
    addEvent: (event: any) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider = ({ children }: { children: React.ReactNode }) => {
    const [events, setEvents] = useState(initialEventsData.data);
    const addEvent = (newEvent: any) => {
        setEvents(prev => [...prev, newEvent]);
    };
    return (
        <EventContext.Provider value={{ events, addEvent }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEvents = () => {
    const context = useContext(EventContext);
    if (!context) throw new Error("useEvents must be used within an EventProvider");
    return context;
};
