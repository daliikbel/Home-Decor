import { configureStore } from "@reduxjs/toolkit";
import {AuthReducer} from "./slices/auth.slice";
import {PostReducer} from './slices/post.slice'



export default configureStore({reducer : 
    {
        AuthReducer,
        PostReducer
    }
})