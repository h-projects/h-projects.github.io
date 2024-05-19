'use client';

import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeButton = (props: { className: string; theme: string | undefined }) => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => {
        props.theme === 'dark' ? setTheme('light') : setTheme('dark');
      }}
      className={props.className}
    >
      {props.theme === 'dark' ? <FaSun title="Light" size="1.5em" /> : <FaMoon title="Dark" size="1.4em" />}
    </button>
  );
};
