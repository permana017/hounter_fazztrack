import React from 'react'

function Logo() {
  return (
    <div className='flex items-center'>
        <img src={require("../../../assets/logo/houter-logo.png")} alt='houter' height={36} width={36}/>
        <p className='ml-4 text-lg font-bold text-[#1B1C57]'>Hounter</p>
    </div>
  )
}

export default Logo