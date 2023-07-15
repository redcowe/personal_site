export interface Book {
    title: string,
    page: number,
    path: string,
    author: Author,
    amazon_urls: AmazonURL
}

export interface ReadBookResponse {
    resources: Resource[]
}

interface Resource {
    book: Book
}

interface AmazonURL {
    outline: string
}
interface Author {
    name: string
}
export const CurrentBooks = (props: { resources?: [] | string }) => {
    if (props.resources === undefined) {
        const message = "Unable to fetch :("
        return (<div>{message}</div>)
    }
    if (typeof props.resources === "string") {
        return (<div>{props.resources}</div>)
    }
    return(
        <>
        {props.resources.map((resource: Resource) => {
            return(
            <li>
                <div className="flex justify-center">
                    <a href={"https://bookmeter.com"+resource.book.path} className="no-underline hover:underline" target="_blank" rel="noreferrer">
                        {resource.book.title} - {resource.book.author.name}
                    </a>
                </div>
            </li>
            )
        })}
        </>
        )
}

export const ReadBooks = ((props: {response?: ReadBookResponse | string}) => {
    if (props.response === undefined) {
        const message = "Unable to fetch :("
        return (<div>{message}</div>)
    }
    if (typeof props.response === "string") {
        return (<div>{props.response}</div>)
    }
    return(
        <>
        {props.response.resources.slice(0, 3).map((resource: Resource) => {
            return(
            <li>
                <div className="flex justify-center">
                    <a href={"https://bookmeter.com"+resource.book.path} className="no-underline hover:underline" target="_blank" rel="noreferrer">
                        {resource.book.title} - {resource.book.author.name}
                    </a>
                </div>
            </li>
            )
        })}
        </>
    )

})

