import React from 'react';
import { Navigation_Items } from '../../icons/data';
import { Link } from 'react-router-dom';

const Sidemenu = () => {
    return (
          <section className='fixed w-56 h-screen flex flex-col items-stretch'>
            <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
              {
                Navigation_Items.map((item) => {
                  return (
                    <Link 
                      className='hover:bg-gray-300 transition duration-100 flex items-center justify-c w-full space-x-2 rounded-lg p-3 text-sm' 
                      to={`/${item.title.toLowerCase()}`} 
                      key={item.id}
                    >
                        <div>
                            {item.icon}
                        </div>
                        <span>
                            {item.title}
                        </span>
                    </Link>
                  );
                })
              }
            </div>
          </section>
    );
}

export default Sidemenu;