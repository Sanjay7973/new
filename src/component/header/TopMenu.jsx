
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const TopMenu = () => {
  return (
    <div className='flex justify-between p-6 px-10'>
        {/* first part  */}
      <div>
        Relai
      </div>
      {/* // second part  */}
      <div className='flex'>
        <div>
        <h1 className='text-sm'>ASX:RLAIT</h1>
        <span>$1.06<span><ArrowDropUpIcon/>2%</span>
        </span>
        </div>
        <div>
<span className='ml-4'>
      <AccountCircleIcon sx={{fontSize:'60px'}}/>
      </span>
        </div>
      
       
        
      </div>
      

    </div>
  )
}

export default TopMenu
