import { useEffect, useState } from 'react';
import { themes } from '../constants/themes';

const useTheme = (defaultStartupTheme) => {
  const [theme, setTheme] = useState(defaultStartupTheme);

  const toggleTheme = () => {
    const themeParams = theme.name.split(".")

    if (themeParams[1] === 'light') {
      window.localStorage.setItem('theme', `${themeParams[0]}.dark`);
      setTheme(themes[themeParams[0]].dark);
    } else {
      window.localStorage.setItem('theme', `${themeParams[0]}.light`);
      setTheme(themes[themeParams[0]].light);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      const themeParams = localTheme.split(".");
      setTheme(themes[themeParams[0]][themeParams[1]]);
    }
  }, []);

  return [theme, toggleTheme]
}

export default useTheme;