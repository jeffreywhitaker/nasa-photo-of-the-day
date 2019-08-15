import React from "react"
import styled from 'styled-components'

const PhotoMaker = props => {
    const PhotoOfTheDayDiv = styled.div`
        max-width: 70%;
        margin: 0 auto;
        border-left: 1px dashed black;
        border-right: 1px dashed black;
        background: #f7e4f6;
    `

    const PhotoOfTheDay = styled.img`
        max-width: 50%;
        border-radius: 20px;
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

    // const photoStyle = {
    //     maxWidth: '50%',
    // }

    return (
        <PhotoOfTheDayDiv>
            <h2>{props.title}</h2>
            <PhotoOfTheDay className="nasaPOTD_img" alt="NASA POTD" src={props.imgUrl}/>
            <p>{props.date}</p>
            <PhotoOfTheDayExplanation>{props.explanation}</PhotoOfTheDayExplanation>
        </PhotoOfTheDayDiv> 
    )
}

export default PhotoMaker
