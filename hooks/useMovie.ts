import { useContext } from 'react';

import { MovieContext } from '@/context/MovieContext';
const useMovie = () => {
    const context = useContext(MovieContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};

export default useMovie;