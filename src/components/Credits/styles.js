import styled from "styled-components";

export const Title = styled.h3`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
`

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #fff;
    max-width: 100px;
  }

  img {
    height: 175px;
    border-radius: 20px;
  }
`