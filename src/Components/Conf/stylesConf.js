import styled from "styled-components";

export const DivConf = styled.div`
    height: 70%;
    border-radius: 20px;
    background-color: #ffffff;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`;

export const Title = styled.h2`
    color: #B71D1D;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    @media only screen and (min-width: 1900px) {
        font-size: 50px;
    }
`;

export const Button = styled.button`
    color: #ffffff;
    font-size: 23px;
    margin: 5px;
    padding: 5px 0;
    border-radius: 20px;
    width: 10rem;
    background-color: #691110;
    @media only screen and (min-width: 1900px) {
        font-size: 25px;
        margin: 10px 30px;
    }
`;