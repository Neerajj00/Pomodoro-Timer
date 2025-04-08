import React from 'react'

function BoxContainer({children , classes}) {
  return (
    <div className={` bg-zinc-900 border border-zinc-800 p-3 rounded-2xl ${ classes && classes }` }>
        {children}
    </div>
  )
}

export default BoxContainer