import {configureStore} from '@reduxjs/toolkit';

import dobSlicer from '../store/dobSlicer/dobSlicer';

const reducer = {
    dobSlicer,
}

const Store = configureStore({
  reducer,
});

export default Store