import styled from "styled-components";

// conf. app
export const SectionApp = styled.section`
    font-family: 'Lobster Two', cursive;
    display:grid;
    grid-template-areas:'task temp conf';
    height: 100vh;
    background-color: #FF8081;
    justify-content: start;

    .task{
        grid-area: task;
        background-color: #691110;
        max-width: 390px;
    }
    .temp{
        grid-area: temp;
    }
    .conf{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        grid-area: conf;
    }  
`;
export const Title = styled.h1`
    color: #ffffff;
    font-size: 50px;
`;

// conf. task
export const DivTask = styled.div`
    padding: 33px 40px 20px 40px;
`;
export const DivTitle = styled.div`
    display: flex;
    
    button{    
        display: block;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }
    
`;
export const TitleTask = styled(Title)`
    padding-right: 120px;
`;
export const PahTask = styled.p`
    max-width: 290px;
    display: flex;
    color: #ffffff;
    font-size: 30px;
`;

// conf. Temp
export const TitleTemp = styled(Title)``;
export const DivTempConteiner = styled.div`
    background-color: #C42021;
    width: 90vh;
    height: 90%;
    margin: 5% 30px 0;
    border-radius: 20px;
    padding-top: 20px;
    text-align: center;
`;
export const DivTemp = styled.div`
    padding: 15px 0 0;
    p{
        font-size: 170px;
        background-color: #B71D1D;
        border-radius: 100px;
        width: 80%;
        margin: 5px 10% 20px;
        padding-bottom: 10px;
        color: #ffffff;
    }
    button{
        margin: 0 5px;
        font-size: 25px;
    }
`;
export const DivTempCont = styled(DivTemp)`
    padding: 0;
    margin: 5% 0;
`;
export const Button = styled.button`
    background-color: #691110;
    height: 40px;
    width: 147px;
    border-radius: 10px;
    color: #ffffff;
    font-size: 20px;
`;

// conf. configuração
export const DivConf = styled.div`
    background-color: #ffffff;
    height: 25%;
    margin-top: 10px;
    border-radius: 20px;
    text-align: center;
    padding: 30px 20px;
    h1{
        color: #C42021;
        font-size: 30px;
        font-weight: 600;
        padding-bottom: 15px;
    }
    button{
        margin: 0 2px;
    }
`;