import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    name: '',
    email: '',
    password: '',
  },
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    submitForm: (state) => {
      console.log('Form Data:',state.name, state.email,state.password
        
      );
    },
  },
});

export const { setFormData, submitForm } = registrationSlice.actions;

export default registrationSlice.reducer;
