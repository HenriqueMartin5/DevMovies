import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from {
        transform: scale(0)
    }

    to {
        transform: scale(1)
    }
`

export const Background = styled.div`
background-image: url(${(props) => props.img});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 102.5%;
    background-color: rgba(0, 0, 0, 0.5);
}

&::after {
        content: "";
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`

export const Container = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
max-width: 1500px;

`

export const Info = styled.div`

z-index: 2;
padding: 20px;
width: 50%;
margin-top: 50px;

h1 {
    font-size: 4.2rem;
    font-weight: 700;
    color: #fff ;
}

p {
    font-size: 1.25rem;
    font-weight: 500;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
}
`

export const Poster = styled.div`

z-index: 2;
display: flex;
justify-content: center;

img {
    width: 100%;
    max-width: 280px;
    margin-top: 70px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
}
`

export const ContainerButtons = styled.div`

display: flex;
gap: 20px;
margin-top: 30px;

`
