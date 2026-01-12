import { createContext, useState } from 'react';



export const WatchListContext = createContext<unknown>({
    watchListData: [],
    setWatchListData: () => { }
});


type Props = {
    value?: {
        watchListData: Array<string>,
        setMovieData: React.Dispatch<React.SetStateAction<string[]>>
    }
    children: React.ReactNode;
};


export const WatchListProvider = ({ children }: Props) => {
    const [watchListData, setWatchListData] = useState(['Barbie'])

    return (
        <WatchListContext.Provider value={{ watchListData, setWatchListData }}>
            {children}
        </WatchListContext.Provider>
    );
};







