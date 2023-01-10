import styled from "styled-components";

export const SectionApp = styled.section`
    font-family: 'Lobster Two', cursive;
    display:grid;
    grid-template-areas:'task temp conf';
    grid-template-columns: 400px 45%;
    background-color: #FF8081;
    height: 100vh;
    @media only screen and (max-width: 400px) {
        grid-template-columns: 310px 450px 200px;
        height: 220vh;
    }
`;
export const DivConteiner = styled.div`
    background-color: #FF8081;
    @media only screen and (max-width: 400px) {
        height: 225vh;
    }
    
`;
export const DivConfConteiner = styled(DivConteiner)`
    display: grid;
    align-items: center;
    margin-right: 10px;
    grid-template-rows: 1fr 1fr 1fr;
    @media only screen and (max-width: 400px) {
        height: 225vh;
    }
`;