import React, { createContext, useState } from 'react';

const CarrosContext = createContext();

export function CarrosProvider({ children }) {
    const [carrosSelecionados, setCarrosSelecionados] = useState([]);

    return (
        <CarrosContext.Provider value={{ carrosSelecionados, setCarrosSelecionados }}>
        {children}
        </CarrosContext.Provider>
    )
}

export default CarrosContext;
