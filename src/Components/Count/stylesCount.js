import styled from "styled-components";

export const DivCountConteiner = styled.div`
    background-color: #C42021;
    margin: 20px;
    padding: 10px 0;
    max-height: 95%;
    border-radius: 20px;
    text-align: center;
    height: 100%;
`;

export const DivCount = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    @media only screen and (min-width: 1900px) {
        height: 90%;
    }
`;

export const DivButtons = styled.div`
    margin: 5px 0;
`;
export const DivTemp = styled.div`
    background-color: #B71D1D;
    margin: 30px 5%;
    border-radius: 30px;
    p{
        font-size: 5rem;
        color: #ffffff;
    }
    @media only screen and (min-width: 1600px) {
        p{
            font-size: 7rem;
        }
    }
`;
export const Title = styled.h1`
    color: #ffffff;
    font-size: 80px;
`;

