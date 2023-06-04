import React from 'react'
import DataContext from "./DataContext"

// This will act like our centerlized component where we will keep everthing or every info related to our webpage
// childer: is a prop which will become the component on which this component (ContextProvider) wrops

export default function ContextProvider() {
  return (
    <DataContext.Provider>
        {Children}
    </DataContext.Provider>
  )
}
