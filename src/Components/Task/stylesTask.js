import styled from "styled-components";

export const DivTask = styled.div`
    background-color: #691110;
    max-width: 441px;
`;

export const DivTaskHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const DivButtons = styled(DivTaskHeader)`
    flex-direction: column;
    margin: 10px 0;

    button{
        font-size: 28px;
        margin: 10px 0;
    }
`;

export const DivList = styled(DivTaskHeader)`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 77%;
    margin: 0 20px;
    label{
        width: 90%;
    }
    span:nth-child(3){
        width: 100%;
        color: #ffffff;
        font-size: 30px;
    }
    @media only screen and (min-width: 1900px) {
        height: 85%;
    }
`;

export const Title = styled.h2`
    color: #ffffff;
    font-size: 50px;
`;

