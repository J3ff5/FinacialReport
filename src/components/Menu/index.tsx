import React from 'react';
import {MenuList} from "./MenuList";
import {TypeMenuNames} from "./Menu.structure";
import {Link} from "react-router-dom";

export default function Menu() {

    const [activeMenu, setActiveMenu] = React.useState<TypeMenuNames>("Home");

    const renderMenus = React.useMemo(() => {
        return MenuList.map((menu, index) => {
            const isActive = menu.name === activeMenu;
            return (
                <Link to={menu.path} key={index}>
                    <div
                        onClick={() => {
                            setActiveMenu(menu.name);
                        }}
                        className={`px-3 py-1 transition-all border-b w-full ${isActive && "bg-gray-1 dark:bg-blue-1"}`}>
                        <span className="text-md font-semibold dark:text-light-gray">{menu.name}</span>
                    </div>
                </Link>
            )
        })
    }, [activeMenu]);

    return (
        <div
            className="flex flex-roll md:flex-col w-full h-full border-t border-gray-200 dark:border-light-blue bg-light-gray dark:bg-dark-blue transition-all">
            {renderMenus}
        </div>
    );
}
