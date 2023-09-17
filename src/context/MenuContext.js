import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
    }
    const handleMenuClose = () => {
        setMenu(false)
    }
    return <MenuContext.Provider value={{ handleMenu, menu,handleMenuClose }}>
        {children}
    </MenuContext.Provider>


}

export { MenuContext, MenuProvider }