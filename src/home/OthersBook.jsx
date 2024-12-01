import React, { useEffect, useState } from 'react';
import Bookcard from '../components/Bookcard';



const OthersBook = () => {
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/all-books")
    //         .then(res => res.json())
    //         .then(data => {
    //             setBooks(data.slice(4,8)); // Update the books state here
    //         })
    //         .catch(error => console.error("Error fetching books:", error));
    // }, []);

    return (
        <div>
            {/* <Bookcard books={books} headline="Others Book" /> */}
        </div>
    );
}

export default OthersBook