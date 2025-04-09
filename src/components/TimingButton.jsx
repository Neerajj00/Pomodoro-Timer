import React, { useContext} from 'react'
import { GlobalContext } from '../context/Context'

function TimingButton({onClick,time}) {
    const {isWidthSmaller} = useContext(GlobalContext);

  return (
    <p 
    onClick={onClick}
    className='cursor-pointer hover:text-zinc-300 text-[14px] text-zinc-500 '>{`+ ${time} ${isWidthSmaller ? "" : " min"}`}</p>
  )
}

export default TimingButton