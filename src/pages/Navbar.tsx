import { NavLink} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <nav className='sticky top-0 z-50 flex justify-between items-center text-white px-6 py-4 md:px-10 border-b border-gray-200 bg-[#4D2600]'>
                    <div className='flex items-center gap-2'>
                        <span className='text-xl font-bold'>Sports Events Calendar</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-[#7A3D00]  font-semibold' : 'bg-[#4D2600]'}`
                            }
                        >
                            Calendar
                        </NavLink>
                        <NavLink 
                            to="/add-event" 
                            className={({ isActive }) => 
                                `px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-[#7A3D00]  font-semibold' : 'bg-[#4D2600]'}`
                            }
                        >
                            Add Event
                        </NavLink>
                    </div>
                </nav>
    )
}

export default Navbar;