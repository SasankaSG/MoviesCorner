import PageNotFoundIMG from '../assets/images/pagenotfound.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import { useEffect } from 'react';
import { useTitles } from "../hooks/useTitles";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });


  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-900 my-8 dark:text-white'>404, Oooops!</p>
          <img className="h-1000 w-1500 pt-5" src={PageNotFoundIMG} alt="PNF IMG" />
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <Button>Back To Movies</Button>
          </Link>

        </div>
      </section>
    </main>
  )
}
