export interface Book {
    title: string,
    pages: number,
}

export const Books = (props: { books?: Book[] | string }) => {
    if (props.books === undefined) {
        const message = "Unable to fetch :("
        return (<div>{message}</div>)
    }
    if (typeof props.books === "string") {
        return (<div>{props.books}</div>)
    }
    return(
        <>
        {props.books.map((book: Book) => {
            return (
            <li>
                <div>{book.title}</div>
            </li>)
        })}
        </>
    )
}
