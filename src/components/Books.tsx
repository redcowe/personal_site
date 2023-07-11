export interface Book {
    title: string,
    page: number,
    author: Author
}

interface Resource {
    book: Book
}

interface Author {
    name: string
}
export const Books = (props: { resources?: [] | string }) => {
    if (props.resources === undefined) {
        const message = "Unable to fetch :("
        return (<div>{message}</div>)
    }
    if (typeof props.resources === "string") {
        return (<div>{props.resources}</div>)
    }
    props.resources.map((resource: Resource) => {
        console.log(resource.book.page)
    })
    return(
        <>
        <li>hi</li>
        </>
        )
}

