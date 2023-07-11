import React, { useEffect, useState } from "react";
import { Books } from "./Books";

const Home = () => {

    const [isLoadingBooks, setIsLoadingBooks] = useState<boolean>(true)
    const [resources, setResources] = useState<[] | string>()
    useEffect(() => {
        getBooks(setIsLoadingBooks, setResources);
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
                    "Coming Soon..."
                </ul>
            </div>
        </div>
            <div className="container ">
                <div>
                    Recently Read Books:
                    <ul id="recent-book-list">
                        { isLoadingBooks && <div>Loading...</div>}
                        { resources && <Books resources={resources}/>}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

function getBooks(setIsLoading: (bool: boolean) => void, setBooks: (books: [] | string) => void) {
    const API = "http://localhost:8080/books"
    fetch(API)
        .then((response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setBooks(data)
        }).catch(() => {
            setIsLoading(false)
            setBooks("Unable to fetch :(")
        })
}
export default Home;
