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
    @media only screen and (min-width: 1600px) {
        font-size: 50px;
    }
`;

export const Button = styled.button`
    font-size: 23px;
    margin: 5px;
    padding: 5px 0;
    background-color:${(props)=> props.select_conf === true ? '#B71D1D': '#691110'};
    color: ${(props)=> props.select_cont === true ? '#B48887': '#ffffff'};
    border-radius: 20px;
    width: 10rem;
    
    @media only screen and (min-width: 1600px) {
        font-size: 25px;
        margin: 5px;
        width: 13rem;
    }
`;