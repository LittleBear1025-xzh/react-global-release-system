import {configureStore} from '@reduxjs/toolkit'
import rightReducer from './slice/RightsSlice'

export default configureStore({
    reducer: {
        rights: rightReducer,
    }
})