import { useNavigate } from 'react-router-dom';

type EventSidePanelProps = {
    selectedDate: string | null;
    selectedEvents: any[];
};

const EventSidePanel = ({ selectedDate, selectedEvents }: EventSidePanelProps) => {
    const navigate = useNavigate();

    return (
        <div className="w-full md:w-80 p-6 rounded-lg shadow-sm border border-gray-200 h-fit mt-14 md:mt-0">
            <h2 className="text-xl font-bold text-[#7A3D00] mb-4 border-b border-gray-200 pb-2">
                {selectedDate ? new Date(selectedDate).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric'}) : 'Select a date'}
            </h2>
            
            {!selectedDate && (
                <p className="text-[#7A3D00] italic text-sm">Click any date on the calendar to see events.</p>
            )}
            
            {selectedDate && selectedEvents.length === 0 && (
                <p className="text-[#7A3D00] italic text-sm">No events scheduled for this day.</p>
            )}

            {selectedEvents.length > 0 && (
                <div className="flex flex-col gap-3">
                    {selectedEvents.map(event => (
                        <div 
                            key={event.originalIndex}
                            onClick={() => navigate(`/event/${event.originalIndex}`)}
                            className="p-3 border border-[#C19A6B] rounded-md cursor-pointer hover:bg-orange-50 transition-colors"
                        >
                            <div className="text-xs text-[#7A3D00] font-semibold mb-1">{event.timeVenueUTC.slice(0,5)} - {event.originCompetitionName}</div>
                            <div className="text-sm font-bold text-[#7A3D00]">
                                {event.homeTeam?.name || 'TBD'} vs {event.awayTeam?.name || 'TBD'}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventSidePanel;
