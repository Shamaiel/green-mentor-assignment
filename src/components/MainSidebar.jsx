
import React from 'react'
import SidebarLeft from './SidebarLeft'
import { Button } from 'flowbite-react'

const MainSidebar = () => {
  
  
    return (
    <div  className='flex flex-col  gap-2'>
        <SidebarLeft css={{backgroundColor: "black"}} />
        <Button color="success">Open help center</Button>
      
    </div>
  )
}

export default MainSidebar
