export default function Footer() {
    
    const handleGitRedirect = () => {
      window.open('https://github.com/Dober-Dog', '_blank')
    }

    const handleLinkedRedirect = () => {
        window.open('https://www.linkedin.com/in/logan-russell-2582a6269/', '_blank')
    }
  
    return (
      <div className='footer'>
        <img onClick={handleGitRedirect} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' height='30px'/>
        <img onClick={handleLinkedRedirect} src='https://cdn-icons-png.freepik.com/256/4096/4096186.png?semt=ais_hybrid' height='30px' />
      </div>
    );
  }
  