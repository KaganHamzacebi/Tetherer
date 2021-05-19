import React, { Fragment, useEffect, useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { UserContext } from '../App';

export default function Header() {
    const history = useHistory();

    const { user, setUser } = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    function handleLogin() {
        const uri = encodeURIComponent(process.env.REACT_APP_SERVER_URL + '/super_ultra_secret_uncreachable_access_token');
        window.open(`https://discord.com/api/oauth2/authorize?client_id=833070237247209499&redirect_uri=${uri}&response_type=code&scope=identify%20connections%20guilds`, '_blank', 'width=520,height=820');
    }

    function signOut() {
        setUser(null);
        console.log('xd');
        removeCookie('userToken');
        history.push('/');
    }

    return (
        <Disclosure as="nav" className="bg-transparent bg-home bg-opacity-50 border-b border-gray-800 border-opacity-50">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        onClick={() => history.push('/')}
                                        className="h-8 w-8 cursor-pointer"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a
                                            className="text-primary hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                            href='/entegrations'
                                        >
                                            Entegrations
                                        </a>
                                        <a
                                            className="text-primary hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                            href='/features'
                                        >
                                            Features
                                        </a>
                                        <a
                                            className="text-primary hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                            href='/documentation'
                                        >
                                            Documentation
                                        </a>
                                        <a
                                            className="text-primary hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                            href='/commands'
                                        >
                                            Commands
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button
                                        className={`text-primary w-24 text-xs font-semibold rounded focus:outline-none p-2 mr-4 ${user ? 'hidden' : ''}`}
                                        style={{ backgroundColor: '#7289DA' }}
                                        type='submit'
                                        onClick={handleLogin}
                                    >Login Here</button>
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        {({ open }) => (
                                            <>
                                                <div className='flex flex-row'>
                                                    <p className={`text-primary px-3 py-2 rounded-md font-medium ${user ? '' : 'hidden'}`}>{user && user.username}</p>
                                                    <Menu.Button className={`max-w-xs flex items-center text-sm outline-none focus:outline-none ${user ? '' : 'hidden'}`}>
                                                        <span className="sr-only">Open user menu</span>
                                                        {
                                                            user && user.id &&
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
                                                                alt=""
                                                            />
                                                        }
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        static
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg p-1 bg-title ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                                    >
                                                        <Menu.Item>
                                                            <button
                                                                onClick={() => {
                                                                    user ?
                                                                        history.push('/dashboard')
                                                                        :
                                                                        handleLogin();
                                                                }}
                                                                className="block rounded w-full h-full p-2 text-sm text-primary text-left hover:bg-content focus:outline-none"
                                                            >
                                                                Dashboard
                                                            </button>
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            <button
                                                                onClick={signOut}
                                                                className="block rounded w-full h-full p-2 text-sm text-red-500 text-left hover:bg-content focus:outline-none"
                                                            >
                                                                Sign Out
                                                            </button>
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </>
                                        )}
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button
                                onClick={() => {
                                    user ?
                                        history.push('/dashboard')
                                        :
                                        handleLogin();
                                }}
                                className="block rounded w-full h-full p-2 text-sm text-primary text-left hover:bg-content focus:outline-none"
                            >
                                Dashboard
                            </button>
                        </div>
                        <div className="px-2 pt-2 border-t border-gray-700 flex">
                            {
                                user !== null &&
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className={`text-base font-medium leading-none text-white  `}>
                                            {user && user.username}
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className='flex-grow'>
                            </div>
                            {
                                user ?
                                    <div className="my-auto pl-2">
                                        <button
                                            className="w-full bg-red-500 text-white px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                                            onClick={signOut}
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                    :
                                    <div className="my-auto">
                                        <button
                                            className="w-full text-white px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                                            style={{ backgroundColor: '#7289DA' }}
                                            onClick={handleLogin}
                                        >
                                            Sign In
                                        </button>
                                    </div>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    );
}