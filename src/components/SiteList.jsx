export default function SiteList(){

    return (
        <div className='sites'>
            <h1>Here are some projects I've been a part of!</h1>
            <div className='sitelist'>
                <div className='card'>
                    <h1>DoberDog's Meme Generator</h1>
                    <div className='card-links'>
                        <a href='https://doberdogmemes.netlify.app/' target='_blank' rel='noopener noreferrer'>Visit Site</a>
                        <a href='https://github.com/Dober-Dog/meme-generator' target='_blank' rel='noopener noreferrer'>View Code</a>
                    </div>
                    <img src='src/components/Screenshot 2024-09-01 214628.png' alt="DoberDog's Meme Generator Image" height="400px"/>
                    <hr></hr>
                </div>
            </div>
            <div className='card'>
                <h1>DoggyFacts</h1>
                <div className='card-links'>
                    <a href="https://doggyfacts.netlify.app/" target='_blank' rel='noopener noreferrer'>Visit Site</a>
                    <a href="https://github.com/Dober-Dog/dog-facts" target='_blank' rel='noopener noreferrer'>View Code</a>
                </div>
                <img src="src/components/Screenshot 2024-09-01 215310.png" alt="DoggyFacts Image" height="400px"/>
                <hr></hr>
            </div>
        </div>
    )
}