import { useState, useEffect } from 'react'

export default function Home(){

    function genNum(){
        return Math.floor(Math.random() * 4)
    }

    const [num, setNum] = useState(genNum());

    useEffect(() => {
        const interval = setInterval(() => {
            setNum(genNum())
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    const quotesArr = [
        {
            quote: "I’m a great believer in luck, and I find the harder I work, the more I have of it.",
            author: "Thomas Jefferson",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoXXs5zzy1lLDuGMKHUvgKPcx2vboRNdnMg&s"
        },
        {
            quote: "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
            author: "Aristotle",
            url: "https://live.staticflickr.com/5008/5264885366_c5152e5ef4_b.jpg"
        },
        {
            quote: "I attribute my success to this: I never gave or took any excuse.",
            author: "Florence Nightingale",
            url: "https://live.staticflickr.com/8672/16509698757_dcaca77b60_b.jpg"
        },
        {
            quote: "Don't follow the crowd, let the crowd follow you.",
            author: "Margaret Thatcher",
            url: "https://live.staticflickr.com/65535/46983885404_8e2ecce8ae_b.jpg"
        },
        {
            quote: "Start by doing what’s necessary, then what’s possible; and suddenly you are doing the impossible.",
            author: "St. Francis of Assisi",
            url: "https://www.teachingcatholickids.com/wp-content/uploads/2017/09/20180920T1455-20508-CNS-ST-FRANCIS-ASSISI.jpg"
        }
    ]

    return (
        <div className='home'>
            <div
                className='quotes'
                style={{
                    backgroundImage: `url(${quotesArr[num].url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h1>{quotesArr[num].quote}</h1>
                <h2>-{quotesArr[num].author}</h2>
            </div>
            <h1>Welcome to my portfolio website!</h1>
            <h3>Let me share some of my favorite quotes with you! The quote will change every 10 seconds, and the background is the person who said it!</h3>
        </div>
    )
}