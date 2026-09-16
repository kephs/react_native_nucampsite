// redux/store.js

import { configureStore } from '@reduxjs/toolkit';

import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        promotions: promotionsReducer,
        partners: partnersReducer,
        comments: commentsReducer,
        favorites: favoritesReducer
    }
});