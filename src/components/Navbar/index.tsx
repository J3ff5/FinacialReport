import React from 'react';
import {BiSun, BiMoon} from 'react-icons/bi';
import {IThemeButtonsDict} from "./Navbar.structure";

export default function Navbar() {

    const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const localTheme = localStorage.getItem('color-theme');

    const [theme, setTheme] = React.useState<string>(localTheme || browserTheme);

    React.useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            return
        }

        document.documentElement.classList.remove('dark');
    }, [theme]);

    function toggleTheme(theme: string): void{
        setTheme(theme);
        localStorage.setItem('color-theme', theme);
    }

    const themeButtons: IThemeButtonsDict = {
        light: <BiSun onClick={() => toggleTheme('dark')}/>,
        dark: <BiMoon onClick={() => toggleTheme('light')}/>,
    }

    return (
        <div className="flex flex-row w-full bg-gray-200 justify-between pl-5 pr-6 py-5 items-center dark:bg-dark-blue dark:text-light-gray transition-all">
            <span className="font-medium text-base sm:text-2xl">Relatórios Financeiros do Governo dos EUA</span>
            <div className="cursor-pointer text-xl sm:text-2xl">
                {themeButtons[theme]}
            </div>
        </div>
    );
}
