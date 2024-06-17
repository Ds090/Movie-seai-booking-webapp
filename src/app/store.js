import {configureStore} from '@reduxjs/toolkit';
import  userSlice  from '../features/LoginPage/LoginPageSlice';
import TimeSlice2 from '../features/LoginPage/TimeSlice2';
import TimeSlice3 from '../features/LoginPage/TimeSlice3';

export const store = configureStore({
    reducer: {user: userSlice,
              TimeSlice2: TimeSlice2,
              TimeSlice3: TimeSlice3
        }
});