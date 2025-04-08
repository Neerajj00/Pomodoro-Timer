import React, { useState , useEffect} from 'react'
import { createContext } from 'react'

// Create a context
export const GlobalContext = createContext(null);


export default function GlobalState({children}){
    // state that handles the size of the window
    const [isWidthSmaller, setIsWidthSmaller] = useState(false);

    // state that handles the menu overlay
    const [displayMenuOverlay, setDisplayMenuOverlay] = useState(false);

    // function to handle the menu overlay
    function handleMenuOverlay(){
        setDisplayMenuOverlay(prev => !prev);
    }

    // state that handles the menu open and close
    const [menuOpen, setMenuOpen] = useState(false)

    function handleMenuClose(){
        if(displayMenuOverlay){
            setDisplayMenuOverlay(false);
        }
    }

    // function to check the size of the window
    function checkScreenSize(){
        setIsWidthSmaller(window.innerWidth < 640);
    }


    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize",checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        }
    },[])


    return (
        <GlobalContext.Provider value={{ handleMenuClose , setIsWidthSmaller ,isWidthSmaller ,checkScreenSize , setMenuOpen , menuOpen , displayMenuOverlay , setDisplayMenuOverlay , handleMenuOverlay}}>
            {children}
        </GlobalContext.Provider>
    )
}