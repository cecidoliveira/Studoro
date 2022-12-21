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

export const Title = styled.h2`
    color: #ffffff;
    font-size: 50px;
`;

export const DivButtons = styled(DivTaskHeader)`
    flex-direction: column;
    margin: 10px 0;

    button{
        font-size: 28px;
        margin: 10px 0;
    }

    @media only screen and (min-width: 1600px) {
        button{
            margin: 5px;
            font-size: 30px;
            
        }
    }
`;

export const DivList = styled(DivTaskHeader)`
    
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 75vh;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 20px;

    /* contents */
    label{
        width: 90%;
    }
    span:nth-child(3){
        width: 100%;
        color: #ffffff;
        font-size: 30px;
    }

    @media only screen and (min-width: 1900px) {
        height: 85vh;
    }

    /* scroll */
    ::-webkit-scrollbar {
        width: 9px;
    }
    ::-webkit-scrollbar-track {
        background: #ffffff;
        border-radius: 20px;         
    }

    ::-webkit-scrollbar-thumb {
        background-color: #C42021;
        border-radius: 20px;     
    }
`;
/* div SelectTdTasks */
export const DivSelectTasks = styled.div`
    position: absolute;
    top: 90vh;
    left: 20px;
    display: flex;
    z-index: 1;
    background-color: #ffffff;
    height: 50px;
    width: 520px;
    border-radius: 15px;
    justify-content: space-around;
    align-items: center;

    p{  
        padding-left: 10px;
        color: #C42021;
        font-size: 30px;
    }
    button{
        background-color: #C42021;
        width: 15%;
        font-size: 25px;
        border-radius: 20px;
        color: #ffffff;
        height: 35px;
        margin-right: 5px;
    }
`;
