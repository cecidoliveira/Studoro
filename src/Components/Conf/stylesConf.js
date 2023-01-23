import styled from "styled-components";

export const DivConf = styled.div`
    height: 70%;
    border-radius: 20px;
    background-color: #ffffff;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    @media only screen and (max-width: 426px) {
        margin:  20px 5px; 
    }
`;

export const Title = styled.h2`
    color: #B71D1D;
    font-size: 34px;
    font-weight: 600;
    text-align: center;

    @media only screen and (min-width: 1600px) {
        font-size: 50px;
    } 
`;

export const Button = styled.button`
    font-size: 23px;
    margin: 5px;
    padding: 5px 0;
    color: #ffffff;
    background-color:${(props)=> props.select === true ? '#B71D1D': '#691110'};
    border-radius: 20px;
    width: 10rem;
    
    @media only screen and (min-width: 1600px) {
        font-size: 25px;
        margin: 5px;
        width: 13rem;
    }
`;