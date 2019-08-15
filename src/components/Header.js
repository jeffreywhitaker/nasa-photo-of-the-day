import React from "react"
import styled from "styled-components"

function Header() {
    const SiteHeader = styled.header`
        max-width: 100%;

    `

    const SiteH1 = styled.h1`
        font-size: 4vw;
    `

    return (
        <SiteHeader>
            <SiteH1>NASA Photo of the Day</SiteH1>
        </SiteHeader>
    )
}

export default Header