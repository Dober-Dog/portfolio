import Links from './links'
import Card from './Card'

export default function SiteList(){

    const cardList = Links.map(link => <Card {...link}/>)

    return (
        <div className='sites'>
            <h1>Here are some projects I've been a part of!</h1>
            <div className='sitelist'>
                {cardList}
            </div>
        </div>
    )
}