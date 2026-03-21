import { useNavigate } from 'react-router-dom';
import EventForm from '../components/EventForm';
import { useEvents } from '../context/EventContext';

const AddEventPage = () => {
    const { addEvent } = useEvents();
    const navigate = useNavigate();

    const handleFormSubmit = (newEvent: any) => {
        addEvent(newEvent);
        navigate('/');
    };

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
            <EventForm onSubmit={handleFormSubmit} />
        </div>
    )
}

export default AddEventPage;