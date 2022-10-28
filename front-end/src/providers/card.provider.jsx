import { createContext, useState } from "react";

const CardContext = createContext();

function CardProvider({  children }) {

    const [items, setItems] = useState([]);

    return (

        <CardContext.Provider value={{items, setItems}}>
            {children}
        </CardContext.Provider>

    )

}

export { CardContext, CardProvider};