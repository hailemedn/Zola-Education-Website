import youTubeImg from '../images/Youtube.png'
const Youtube = () => {
    return(
        <section id="youtube-section" className='wrapper'>
            <img src={youTubeImg} alt="Zolaxet Youtube" />
            <div className="yt-description">
                <h1>Zolax on Youtube</h1>
                <p>Our YouTube Channel has over 10,000 Subscribers with 100+ free Courses </p>
                <button className="btn primary">Go To Channel</button>
            </div>
        </section>
    )
}

export default Youtube;