import React, { createContext, useState } from 'react';

const CarrosContext = createContext();

export function CarrosProvider({ children }) {
    const [carrosSelecionados, setCarrosSelecionados] = useState([]);
    const [total, setTotal] = useState(0);

    return (
        <CarrosContext.Provider value={{ carrosSelecionados, setCarrosSelecionados, total, setTotal }}>
            {children}
        </CarrosContext.Provider>
    )
}

export default CarrosContext;
