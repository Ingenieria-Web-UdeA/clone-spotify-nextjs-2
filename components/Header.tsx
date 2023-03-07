import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='navigation-buttons'>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='32' height='32' rx='16' fill='black' fill-opacity='0.42' />
          <g clip-path='url(#clip0_25_32)'>
            <path
              d='M19.03 8.47C19.1705 8.61063 19.2493 8.80125 19.2493 9C19.2493 9.19875 19.1705 9.38937 19.03 9.53L12.56 16L19.03 22.47C19.1037 22.5387 19.1628 22.6215 19.2038 22.7135C19.2448 22.8055 19.2668 22.9048 19.2686 23.0055C19.2704 23.1062 19.2518 23.2062 19.2141 23.2996C19.1764 23.393 19.1203 23.4778 19.049 23.549C18.9778 23.6203 18.893 23.6764 18.7996 23.7141C18.7062 23.7518 18.6062 23.7704 18.5055 23.7686C18.4048 23.7668 18.3055 23.7448 18.2135 23.7038C18.1215 23.6628 18.0387 23.6037 17.97 23.53L10.44 16L17.97 8.47C18.1106 8.32955 18.3013 8.25066 18.5 8.25066C18.6988 8.25066 18.8894 8.32955 19.03 8.47Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_25_32'>
              <rect width='16' height='16' fill='white' transform='translate(8 8)' />
            </clipPath>
          </defs>
        </svg>
        <button onclick='buttonClick()'>
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='32' height='32' rx='16' fill='black' fill-opacity='0.42' />
            <g clip-path='url(#clip0_25_36)'>
              <path
                d='M12.97 8.47C12.8296 8.61063 12.7507 8.80125 12.7507 9C12.7507 9.19875 12.8296 9.38937 12.97 9.53L19.44 16L12.97 22.47C12.8963 22.5387 12.8372 22.6215 12.7962 22.7135C12.7552 22.8055 12.7332 22.9048 12.7314 23.0055C12.7296 23.1062 12.7482 23.2062 12.7859 23.2996C12.8236 23.393 12.8797 23.4778 12.951 23.549C13.0222 23.6203 13.107 23.6764 13.2004 23.7141C13.2938 23.7518 13.3938 23.7704 13.4945 23.7686C13.5952 23.7668 13.6945 23.7448 13.7865 23.7038C13.8785 23.6628 13.9613 23.6037 14.03 23.53L21.56 16L14.03 8.47C13.8894 8.32955 13.6988 8.25066 13.5 8.25066C13.3013 8.25066 13.1106 8.32955 12.97 8.47Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_25_36'>
                <rect width='16' height='16' fill='white' transform='translate(8 8)' />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className='auth'>
        <span className='sign-up'>Sign up</span>
        <div className='log-in'>
          <span>Log in</span>
        </div>
      </div>
    </header>
  );
};

export { Header };
