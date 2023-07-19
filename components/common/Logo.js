const Logo = () => {
    return (        
        <>
            <img className="uk-visible dark:uk-hidden" height="20px" width="20px" src="https://i.ibb.co/52kQJ3Y/logo-1.png" alt="logo" loading="lazy" /> 
            <img className="uk-hidden dark:uk-visible" height="20px" width="20px" src="https://i.ibb.co/52kQJ3Y/logo-1.png" alt="logo" loading="lazy" /> 
        </>
    )
}

export default Logo;