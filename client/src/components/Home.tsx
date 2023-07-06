import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Book, Books } from "./Books";

const Home = () => {

    const [isLoadingBooks, setIsLoadingBooks] = useState<boolean>(true)
    const [books, setBooks] = useState<Book[] | string>()
    useEffect(() => {
        getBooks(setIsLoadingBooks, setBooks);
    }, [])

    return (
    <div className="container flex items-center mx-auto w-1/2 py-4">
        <div className="container flex-col ">
            <div>
                <p className="font-medium">Josh Cowell - Software Developer</p>
            </div>
            <div >
                <p>Hey! I'm Josh, thanks for checking out my website.
                    I'm software developer who's always looking to learn more.
                    Currently focusing on backend application development and application security.</p>
            </div>
        </div>
        <div className="container flex-col">
        <div className="container">
            <div>
                Recently Updated Projects:
                <ul>
                    <li><Link to="/">Project 1</Link></li>
                    <li><Link to="/">Project 2</Link></li>
                    <li><Link to="/">Project 3</Link></li>
                </ul>
            </div>
        </div>
            <div className="container ">
                <div>
                    Recently Read Books:
                    <ul id="recent-book-list">
                        { isLoadingBooks && <div>Loading...</div>}
                        { books && <Books books={books}/>}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

function getBooks(setIsLoading: (bool: boolean) => void, setBooks: (books: Book[] | string) => void) {
    const API = "https://api.jcowe.jp"
    fetch(API)
        .then((response) => {
            return response.json()
        }).then((data: Book[]) => {
            // setBooks(data)
            setIsLoading(false)
            setBooks(data)
        }).catch(() => {
            setIsLoading(false)
            setBooks("Unable to fetch :(")
        })
}
export default Home;
