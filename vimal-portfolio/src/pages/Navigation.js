import React, { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import './style.css'


const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      };

    useEffect(() => {
        const prefersDark = localStorage.getItem('theme') === 'dark';
        setDarkMode(prefersDark);
        if (prefersDark) {
          document.documentElement.classList.add('dark');
        }
      }, []);

    
  return (
    <Disclosure as="nav" className="bg-transparant">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton 
className="group relative inline-flex items-center justify-center rounded-md p-2 text-stone-600 hover:text-stone-900 dark:text-white dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"            >
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
          <div className="flex shrink-0 items-center">
              <span className='name text-xl '>Vimal</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-white' : 'text-stone-600 hover:text-indigo-600 ',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
         
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="relative bg-transparent p-1 text-gray-400 hover:text-stone-600 "
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6 text-yellow-300" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden text-center">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : ' hover:bg-indigo-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

