import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import { SERVER_URL } from '../env';
import PropTypes from 'prop-types';

const BookContext = createContext({
    books: [],
    setBooks: () => {},
    initBooks: () => {},
});
const emptyArr = [];

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState(null);

    const initBooks = useCallback(() => {
        if (!books) {
            fetch(`${SERVER_URL}/books`)
                .then(res => res.json())
                .then(data => setBooks(data))
                .catch(err => console.log(err));
        }
    }, [books]);

    const contextValue = useMemo(() => {
        return {
            books: books ?? emptyArr,
            initBooks,
            setBooks,
        };
    }, [books, initBooks, setBooks]);

    return (
        <BookContext.Provider value={contextValue}>
            {children}
        </BookContext.Provider>
    );
};

export const useBooks = () => {
    return useContext(BookContext);
};

BookProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
