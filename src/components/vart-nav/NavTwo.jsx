import React, { useContext } from 'react';
import './NavTwo.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseIcon from '@mui/icons-material/Close';
import { MenuContext } from '../../context/MenuContext';


const NavTwo = () => {
  const { menu, handleMenuClose } = useContext(MenuContext);

  const handleClose = () => {
    handleMenuClose()
  }

  return (
    <div className={menu ? 'vertical-nav expand-nav' : 'vertical-nav'}>
      <div className="vertical-nav-itmes">
        <div className='v-search'>
          <span className='close-btn' onClick={handleClose} >
            <CloseIcon />
          </span>
          <span>
            <SearchSharpIcon className='v-search-icon' />
          </span>
          <input type="text" placeholder='Search for' />
        </div>

        <span>ABOUT</span>
        <span>REGIONS</span>
        <span> OUR BUSINESS</span>
        <span>NEWS</span>
        <span>INVEST IN NEOM</span>
        <span>CAREERS</span>
        <span>LANGUAGE</span>

      </div>

    </div>
  )
}

export default NavTwo
