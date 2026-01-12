import { createContext, useState } from 'react';



const barbie = require('../assets/images/movies/barbie.jpg');
const flash = require('../assets/images/movies/flash.jpg');
const guardians = require('../assets/images/movies/guardians.jpg');
const kraken = require('../assets/images/movies/kraken.jpg');
const meramid = require('../assets/images/movies/meramid.jpg');


export const MovieContext = createContext<unknown>({
    movieData: [],
    setMovieData: () => { }
});


type Props = {
    value?: {
        movieData: Array<{
            movie: string;
            date: string;
            description: string;
            imgSrc: any;
        }>,
        setMovieData: React.Dispatch<React.SetStateAction<{
            movie: string;
            date: string;
            description: string;
            imgSrc: any;
        }[]>>
    }
    children: React.ReactNode;
};


export const MovieProvider = ({ children }: Props) => {
    const [movieData, setMovieData] = useState([{
        movie: 'Barbie', date: "19-07-2023", description: 'Barbie and Ken are having the time of their lives in the colorful and...',
        imgSrc: barbie
    },
    { movie: 'The Flash', date: "13-06-2023", description: 'When his attempt to save his family inadvertently alters the future, Barr...', imgSrc: flash },
    { movie: 'The Little Mermaid', date: "18-05-2023", description: "The youngest of King Triton's daughters, and the most defiant...", imgSrc: meramid },
    { movie: 'Guardians of the Galaxy Vol. 3', date: "03-05-2023", description: 'Peter Quill, still reeling from the loss of Gamora, must rally his team...', imgSrc: guardians },
    { movie: 'Ruby Gillman, Teenage Kraken', date: "28-06-2023", description: 'Ruby Gillman, a sweet and awkward high school student,...', imgSrc: kraken },
    ]);



    return (
        <MovieContext.Provider value={{ movieData, setMovieData }}>
            {children}
        </MovieContext.Provider>
    );
};







