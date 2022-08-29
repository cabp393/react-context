import { createContext, useContext, useState } from 'react'

export const DataContext = createContext()

export function DataContextProvider(props) {
  const [contextData, setContextData] = useState(8)
  const value = { contextData, setContextData }

  return (
    <DataContext.Provider value={value}>
      <h1>Context & Render (Data: {contextData})</h1>
      {props.children}
    </DataContext.Provider>
  )
}

export function useDataContext() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider')
  }
  return context
}
