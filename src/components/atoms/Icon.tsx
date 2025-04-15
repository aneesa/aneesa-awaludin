// src/components/atoms/Button.tsx
import React from 'react';
import Text from './Text';

interface IconProps {
  name: string;
  onClick?: () => void | undefined;
  className?: string; // Additional custom class names
}

// heroicons
const getIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'home':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
      )
    case 'academic':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      )
    case 'sun':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      )
    case 'moon':
      return  (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      )
    case 'menu':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      )
    case 'close':
      return  (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      )
    case 'user':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      )
    case 'logout':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>
      )
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" >
          <path d="M24 12C24 5.372 18.628 0 12 0S0 5.372 0 12c0 5.625 3.877 10.35 9.103 11.648V15.666h-2.475V12h2.475v-1.58c0 -4.083 1.847 -5.977 5.859 -5.977 0.759 0 2.072 0.15 2.611 0.3V8.063c-0.281 -0.028 -0.773 -0.047 -1.388 -0.047 -1.969 0 -2.728 0.745 -2.728 2.681V12h3.919l-0.675 3.666H13.453v8.245C19.397 23.194 24 18.136 24 12"/>
        </svg>
      )
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 27.429" width="24" height="27.429">
          <path d="M22.286 1.714H1.709C0.766 1.714 0 2.491 0 3.445v20.539C0 24.938 0.766 25.714 1.709 25.714H22.286c0.943 0 1.714 -0.777 1.714 -1.73V3.445c0 -0.954 -0.771 -1.73 -1.714 -1.73M7.254 22.286H3.696V10.832h3.563V22.286zm-1.779 -13.018c-1.141 0 -2.063 -0.927 -2.063 -2.063S4.334 5.143 5.475 5.143c1.136 0 2.063 0.927 2.063 2.063 0 1.141 -0.921 2.063 -2.063 2.063m15.113 13.018h-3.557V16.714c0 -1.329 -0.027 -3.038 -1.848 -3.038 -1.854 0 -2.137 1.446 -2.137 2.941V22.286h-3.557V10.832h3.413v1.564h0.048c0.477 -0.9 1.639 -1.848 3.37 -1.848 3.6 0 4.27 2.373 4.27 5.459z"/>
        </svg>
      )
    case 'pdf':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M0 3C0 1.345 1.345 0 3 0h7.5v6c0 0.83 0.67 1.5 1.5 1.5h6v6.75H8.25c-1.655 0 -3 1.345 -3 3v6.75H3c-1.655 0 -3 -1.345 -3 -3zm18 3H12V0zM8.25 16.5h1.5c1.448 0 2.625 1.177 2.625 2.625s-1.177 2.625 -2.625 2.625h-0.75v1.5c0 0.413 -0.338 0.75 -0.75 0.75s-0.75 -0.338 -0.75 -0.75V17.25c0 -0.413 0.338 -0.75 0.75 -0.75m1.5 3.75c0.623 0 1.125 -0.502 1.125 -1.125s-0.502 -1.125 -1.125 -1.125h-0.75v2.25zm4.5 -3.75h1.5c1.242 0 2.25 1.008 2.25 2.25v3c0 1.242 -1.008 2.25 -2.25 2.25h-1.5c-0.413 0 -0.75 -0.338 -0.75 -0.75V17.25c0 -0.413 0.338 -0.75 0.75 -0.75m1.5 6c0.413 0 0.75 -0.338 0.75 -0.75v-3c0 -0.413 -0.338 -0.75 -0.75 -0.75h-0.75v4.5zm3.75 -5.25c0 -0.413 0.338 -0.75 0.75 -0.75h2.25c0.413 0 0.75 0.338 0.75 0.75s-0.338 0.75 -0.75 0.75h-1.5v1.5h1.5c0.413 0 0.75 0.338 0.75 0.75s-0.338 0.75 -0.75 0.75h-1.5v2.25c0 0.413 -0.338 0.75 -0.75 0.75s-0.75 -0.338 -0.75 -0.75V17.25"/>
        </svg>
      )
    default: // setting
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ) 
  }
};

const Icon: React.FC<IconProps> = ({ 
  name,
  ...props
}) => {
  // Use the getChildren function to conditionally render the content
  const icon = getIcon({ name });

  return (
    <Text {...props}>
      {icon}
    </Text>
  );
};

export default Icon;
