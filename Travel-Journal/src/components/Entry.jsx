

function Entry(props){
  return (
    <article >
        <div className="main-image">
             <img src={props.entry.img.src} alt={props.entry.img.alt}/>
        </div>

        <div className="right-box">
            <span className="Country">{props.entry.country}</span>
            <a href={props.entry.googleMapsLink}>View on Google Maps:</a>
            <h2 className="Place">{props.entry.title}</h2>
            <p className="Date">{props.entry.dates}</p>

            <p className="Description">{props.entry.text}</p>
        </div>


    </article>
  )
}

export default Entry
