
export const Logo = () => {

    return (
        <div className="logo">
            <div className="logo-img">
                <a href="/#" className="logo-img-link">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo company" className="logo-img-item" />
                    <div className="logo-text">
                        <h1 className="logo-text-title">Home Decor</h1>
                        <p className="logo-text-title-slogan">Decor that Inspires</p>
                    </div>
                </a>
            </div>
        </div>
    )
}