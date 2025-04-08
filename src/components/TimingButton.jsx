import React, { useContext} from 'react'
import { GlobalContext } from '../context/Context'

function TimingButton({time}) {
    const {isWidthSmaller} = useContext(GlobalContext);

  return (
    <p className='cursor-pointer hover:text-zinc-300 text-[14px] text-zinc-500 '>{`+ ${time} ${isWidthSmaller ? "" : " min"}`}</p>
  )
}

export default TimingButton