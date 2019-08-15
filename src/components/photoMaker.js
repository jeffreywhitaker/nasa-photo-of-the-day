import React from "react"
import styled from 'styled-components'

const PhotoMaker = props => {
    const PhotoOfTheDayDiv = styled.div`
        max-width: 70%;
        margin: 0 auto;
        border-left: 1px dashed black;
        border-right: 1px dashed black;
    `

    const PhotoOfTheDay = styled.img`
        max-width: 50%;
    `

    const PhotoOfTheDayExplanation = styled.p`
        max-width: 90%;
        margin: 0 auto;
        font-family: calibri;
    `

    // const photoMakerStyle = {
    //     maxWidth: '70%',
    //     margin: '0 auto',
    // }

    const photoStyle = {
        maxWidth: '50%',
    }

    return (
        <PhotoOfTheDayDiv>
            <h1>NASA Photo of the Day</h1>
            <PhotoOfTheDay className="nasaPOTD_img" alt="NASA POTD" src={props.imgUrl} style={photoStyle} />
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <PhotoOfTheDayExplanation>{props.explanation}</PhotoOfTheDayExplanation>
        </PhotoOfTheDayDiv> 
    )
}

export default PhotoMaker
