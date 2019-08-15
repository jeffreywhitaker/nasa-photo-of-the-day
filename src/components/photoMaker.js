import React from "react"
import styled from 'styled-components'

const PhotoMaker = props => {
    const PhotoOfTheDayDiv = styled.div`
        max-width: 70%;
        margin: 0 auto;
        border-left: 1px dashed black;
        border-right: 1px dashed black;
        background: #f7e4f6;
        border-radius: 20px;
    `

    const PhotoOfTheDay = styled.img`
        max-width: 60%;
        border-radius: 20px;

        @keyframes pulse {
            from { transform: scale(1); }
            50% { transform: scale(1.05); }
            to { transform: scale(1); }
        }

        &:hover {
            opacity: .9;
            animation-name: pulse;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
    `
    
    const PhotoOfTheDayDate = styled.p`
        font-size: 1vw;
    `

    const PhotoOfTheDayExplanation = styled.p`
        max-width: 80%;
        margin: 0 auto;
        font-family: calibri;
        padding-bottom: 5%;
        font-size: 1vw;
    `

    const PhotoOfTheDayTitle = styled.h2`
        padding-top: 5%;
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
            <PhotoOfTheDayTitle>{props.title}</PhotoOfTheDayTitle>
            <PhotoOfTheDay className="nasaPOTD_img" alt="NASA POTD" src={props.imgUrl}/>
            <PhotoOfTheDayDate>{props.date}</PhotoOfTheDayDate>
            <PhotoOfTheDayExplanation>{props.explanation}</PhotoOfTheDayExplanation>
        </PhotoOfTheDayDiv> 
    )
}

export default PhotoMaker
