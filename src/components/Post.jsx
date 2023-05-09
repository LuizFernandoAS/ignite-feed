export function Post(props){
    return(
        <div>
            <h2>{props.author}</h2>
            <span>{props.content}</span>
        </div>
    )
}