import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return ( 

      <footer className="p-4 bg-white shadow  dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Sash's Movie Corner</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="#" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
              </li>
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Instagram</a>
              </li>
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Twitter</a>
              </li>
              <li>
                  <a href="#" className="hover:underline">Github</a>
              </li>
          </ul>
          </div>
      </footer>

  )
}
