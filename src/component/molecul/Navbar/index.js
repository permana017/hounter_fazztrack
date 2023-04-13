import React from 'react'
import BtnOutline from '../../atom/BtnOutline'
import BtnPrimary from '../../atom/BtnPrimary'
import Logo from '../../atom/Logo'

function Navbar() {
    return (
        <div className='w-full flex justify-center fixed'>
            <div className='container'>
                <div className="navbar p-0 flex justify-between items-center h-[100px]">
                    <div className="navbar-start w-1/2">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"><path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/></svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li tabIndex={0}>
                                    <a href="#" className="justify-between">
                                        Parent
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                        <Logo/>
                    </div>
                    <div className="navbar-center hidden lg:flex w-1/2 justify-end">
                        <div className='w-[70%] flex justify-between'>
                            <BtnOutline title="About Us" />
                            <BtnOutline title="Article"/>
                            <BtnOutline title="Property"/>
                            <button className='h-[34px] rounded-full bg-[#D1FAE5] px-4 font-semibold text-[#047857]'>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar