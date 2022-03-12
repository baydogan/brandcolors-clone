import './index.css'
import { GrSearch } from 'react-icons/gr'
import {GrFormClose} from 'react-icons/gr'

const Searchbar = () => {
    return (
        <div className='search-bar'>
            <div className='search-bar-group'>
                <div className='search-input'>
                    <GrSearch className='search-icon' />
                    <input type="search" placeholder='Search Brands' />
                    <GrFormClose className='close-icon' />
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
