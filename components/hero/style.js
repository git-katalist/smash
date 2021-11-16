import styled from 'styled-components'

export const StyledHero = styled.div`
background-color: yellow;
height: 500px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;

& img{
width:100%;
}

.brandName{
width:568px;
display:grid;
place-items: center;
margin:1rem 0 1.5rem;

img{
width:50%;
}
& + div {
color: #1d1b19;
font-size: 64px;
font-weight:100;
}
}

`
