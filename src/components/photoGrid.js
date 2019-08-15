import React, {useEffect, useState} from "react"
import axios from "axios"

import PhotoMaker from "./photoMaker"

export default function PhotoGrid() {
    const [photo, setPhoto] = useState([])
    const [yesterdayPhoto, setYesterdayPhoto] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            const nasaPOTD = response.data;
            console.log(nasaPOTD)
            setPhoto(nasaPOTD)
        })
    }, [])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-08-14')
        .then(response => {
            const nasaYesterdayPOTD = response.data;
            console.log(nasaYesterdayPOTD)
            setYesterdayPhoto(nasaYesterdayPOTD)
        })
    }, [])

    return (
        <div className="container">
            <PhotoMaker key={photo.date} title={photo.title} imgUrl={photo.hdurl} explanation={photo.explanation} date={photo.date} />
            <PhotoMaker key={yesterdayPhoto.date} title={yesterdayPhoto.title} imgUrl={yesterdayPhoto.hdurl} explanation={yesterdayPhoto.explanation} date={yesterdayPhoto.date} />
        </div>

    )
}