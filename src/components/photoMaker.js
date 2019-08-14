import React from "react"

const PhotoMaker = props => {
    const photoMakerStyle = {
        maxWidth: '70%',
        margin: '0 auto',
    }

    const photoStyle = {
        maxWidth: '50%',
    }

    return (
        <div className="nasaPOTD_div" style={photoMakerStyle}>
            <img className="nasaPOTD_img" alt="NASA POTD" src={props.imgUrl} style={photoStyle} />
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.explanation}</p>
        </div> 
    )
}

export default PhotoMaker
