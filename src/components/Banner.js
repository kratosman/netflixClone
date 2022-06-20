import Play from '../assets/play-icon.svg'
import info from '../assets/more-info.svg'
function Banner( {bannerMovie} ) {
    const banner = {
        minHeight:"700px",
        height:"100%",
        width:"100%",
        objectFit:"fit",
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${bannerMovie.backdrop_path})`,
        position:"relative",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        maxWidth:"100%",
    }
    return(
        <div>
            <div className='banner' style={banner}>
                <div className='banner__contents'>
                    <div className="title">
                        <span>{bannerMovie.title}</span>
                    </div>
                    <div className='description'>
                        <p>{bannerMovie.overview }</p>
                    </div>
                    <div className="banner__button">
                        <button className='button playButton'>
                            <img src={Play} alt="play" />
                            Play</button>
                        <button className="button playButton">
                            <img src={info} alt="info" />
                            More Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;