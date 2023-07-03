import { contactsReducer } from './contactsReducer'
import { filterListReducer } from './filterListReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({ 
    reducer: {
        contacts: contactsReducer,
        filter: filterListReducer,
      },
    },
)
