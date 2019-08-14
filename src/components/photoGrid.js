import React, {useEffect, useState} from "react"
import axios from "axios"

import PhotoMaker from "./photoMaker"

export default function PhotoGrid() {
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            const nasaPOTD = response.data;
            console.log(nasaPOTD)
            setPhoto(nasaPOTD)
        })
    }, [])

    return (
        <div className="container">
            <PhotoMaker key={photo.date} title={photo.title} imgUrl={photo.hdurl} explanation={photo.explanation} date={photo.date} />
        </div>
    )
}