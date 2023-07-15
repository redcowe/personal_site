import { useEffect, useState } from "react";
import { CurrentBooks, ReadBooks, ReadBookResponse } from "./Books";

const Home = () => {
    const [isLoadingReadBooks, setIsLoadingReadBooks] = useState<boolean>(true)
    const [isLoadingCurrentBooks, setIsLoadingCurrentBooks] = useState<boolean>(true)
    const [currentResources, setCurrentResources] = useState<[] | string>()
    const [readResources, setReadResources] = useState<ReadBookResponse | string>()
    useEffect(() => {
         getCurrentBooks(setIsLoadingCurrentBooks, setCurrentResources);
         getReadBooks(setIsLoadingReadBooks, setReadResources)
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
            <div className="container">
                <div>
                    Currently Reading:
                    <ul id="current-book-list">
                        { isLoadingCurrentBooks && <div>Loading...</div>}
                        { currentResources && <CurrentBooks resources={currentResources}/>}
                    </ul>
                </div>
            </div>
            <div className="container">
                <div>
                    Recently Read:
                    <ul>
                    { isLoadingReadBooks && <div>Loading...</div>}
                    { readResources && <ReadBooks response={readResources}/>}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

//TODO Refactor to remove duplicate code
function getReadBooks(setIsLoadingReadBooks: (loading: boolean) => void, setReadBooks: (books: ReadBookResponse | string) => void) {
    const API = " https://api.jcowe.jp/read"
    fetch(API)
        .then((response) => {
            return response.json()
        }).then((data) => {
            setIsLoadingReadBooks(false)
            setReadBooks(data)
        }).catch(() => {
            setIsLoadingReadBooks(false)
            setReadBooks("Unable to fetch :(")
        })
}

function getCurrentBooks(setIsLoading: (bool: boolean) => void, setBooks: (books: [] | string) => void) {
    const API = " https://api.jcowe.jp/books"
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
