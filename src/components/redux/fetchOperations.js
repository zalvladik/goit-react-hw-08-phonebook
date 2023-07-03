import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit' 

axios.defaults.baseURL = 'https://64a0181aed3c41bdd7a6fcea.mockapi.io'

// --------------------------------------------------------------------------------------------
export const getContactsThunk = createAsyncThunk("contacts/getContactList", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
export const addContactsThunk = createAsyncThunk("contacts/addContactList", async (contact, thunkAPI) => {
        try {
          const response = await axios.post('/contacts', contact);
          return response.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }  
  });

export const deleteContactsThunk = createAsyncThunk("contacts/deleteContactList", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`); 
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
  });
