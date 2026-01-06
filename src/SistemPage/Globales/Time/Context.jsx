import React, { createContext, useState } from 'react'

export const ContentContext = createContext()

export const ContentProvider = ({ children }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [mes, setMes] = useState([]);

    const
        value = {
            startDate,
            setStartDate,
            mes,
            setMes
        }

    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}
