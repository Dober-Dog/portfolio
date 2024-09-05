export default function Card (props){

    return (
        <div className='card'>
            <h1>{props.websiteName}</h1>
            <div className='card-links'>
                <a href={props.webLink} target='blank'>Visit Site</a>
                <a href={props.gitLink} target='blank'>View Code</a>
            </div>
            <img src={props.img} alt={`${props.websiteName} image`} height="400px"/>
            <hr></hr>
        </div>
    )
}