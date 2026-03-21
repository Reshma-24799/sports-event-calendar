import { useParams, useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { events } = useEvents();

    const eventIndex = parseInt(id || '-1');
    const event = events[eventIndex];

    if (!event) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl mb-4 text-gray-900">Event not found</h2>
                <button onClick={() => navigate('/')} className="px-4 py-2 bg-[#C19A6B] text-black font-semibold rounded-md">Return to Calendar</button>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
            <button
                onClick={() => navigate('/')}
                className="mb-6 px-4 py-2 bg-[#7A3D00] text-white rounded-md"
            >
                ← Back to Calendar
            </button>

            <div className="detail-card border rounded-md border-[#C19A6B]">
                <div className="text-center mb-8 border-b border-[#C19A6B] pb-6">
                    <h3 className="text-[#7A3D00] font-bold uppercase text-md mb-2">
                        {event.originCompetitionName} • {event.stage?.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                        {event.dateVenue} | {event.timeVenueUTC}
                    </p>

                    <div className="flex justify-center items-center gap-8 text-2xl font-bold">
                        <div className="flex-1 text-right text-[#7A3D00]">
                            {event.homeTeam?.officialName || event.homeTeam?.name || 'Unknown'}
                        </div>

                        {event.status === 'played' ? (
                            <div className="bg-[#7A3D00] px-4 py-2 rounded-lg text-white text-3xl">
                                {event.result?.homeGoals} - {event.result?.awayGoals}
                            </div>
                        ) : (
                            <div className="text-[#7A3D00] font-normal">vs</div>
                        )}

                        <div className="flex-1 text-left text-[#7A3D00]">
                            {event.awayTeam?.officialName || event.awayTeam?.name || 'Unknown'}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                    <div>
                        <p className="text-[#7A3D00] mb-1 font-bold">Status</p>
                        <p className="capitalize">{event.status}</p>
                    </div>
                    <div>
                        <p className="text-[#7A3D00] mb-1 font-bold">Season</p>
                        <p>{event.season}</p>
                    </div>
                    {event.result?.winner && (
                        <div className="col-span-2 mt-4 p-3 bg-green-50 border border-green-200 rounded text-green-800">
                            <strong>Winner:</strong> {event.result.winner}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
