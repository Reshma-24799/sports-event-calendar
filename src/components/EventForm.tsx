import { useState } from 'react';

type EventFormProps = {
    onSubmit: (eventData: any) => void;
};

const EventForm = ({ onSubmit }: EventFormProps) => {
    const [formData, setFormData] = useState({
        homeTeam: '',
        awayTeam: '',
        date: '',
        time: '',
        competition: 'Custom Friendly',
        season: '2026'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEvent = {
            season: formData.season,
            status: "scheduled",
            timeVenueUTC: `${formData.time}:00`,
            dateVenue: formData.date,
            originCompetitionName: formData.competition,
            homeTeam: {
                name: formData.homeTeam,
                officialName: formData.homeTeam,
                abbreviation: formData.homeTeam.substring(0, 3).toUpperCase()
            },
            awayTeam: {
                name: formData.awayTeam,
                officialName: formData.awayTeam,
                abbreviation: formData.awayTeam.substring(0, 3).toUpperCase()
            },
            result: null
        };

        onSubmit(newEvent);
        
        setFormData({
            homeTeam: '',
            awayTeam: '',
            date: '',
            time: '',
            competition: 'Custom Friendly',
            season: '2024'
        });
    };

    return (
        <form onSubmit={handleSubmit} className=" p-8 rounded-xl shadow-md border border-gray-100 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-[#7A3D00] mb-6">Create New Event</h2>
            
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="form-label">Home Team</label>
                        <input 
                            required 
                            type="text" 
                            name="homeTeam"
                            value={formData.homeTeam}
                            onChange={handleChange}
                            placeholder="e.g. Manchester United"
                            className="form-input focus:ring-2 focus:ring-[#7A3D00]" 
                        />
                    </div>
                    <div>
                        <label className="form-label">Away Team</label>
                        <input 
                            required 
                            type="text" 
                            name="awayTeam"
                            value={formData.awayTeam}
                            onChange={handleChange}
                            placeholder="e.g. Arsenal"
                            className="form-input focus:ring-2 focus:ring-[#7A3D00]" 
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="form-label">Date</label>
                        <input 
                            required 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="form-input focus:ring-2 focus:ring-[#7A3D00]" 
                        />
                    </div>
                    <div>
                        <label className="form-label">Time (UTC)</label>
                        <input 
                            required 
                            type="time" 
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="form-input focus:ring-2 focus:ring-[#7A3D00]" 
                        />
                    </div>
                </div>

                <div>
                    <label className="form-label">Competition Name</label>
                    <input 
                        required 
                        type="text" 
                        name="competition"
                        value={formData.competition}
                        onChange={handleChange}
                        className="form-input focus:ring-2 focus:ring-[#7A3D00]" 
                    />
                </div>
            </div>

            <button 
                type="submit" 
                className="w-full mt-8 px-6 py-3 bg-[#7A3D00] text-white font-bold rounded-md"
            >
                Add Event to Calendar
            </button>
        </form>
    );
};

export default EventForm;
