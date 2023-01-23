import styled from "styled-components";

export const SectionApp = styled.section`
    font-family: 'Lobster Two', cursive;
    display:grid;
    grid-template-areas:'task temp conf';
    grid-template-columns: 400px 45%;
    background-color: #FF8081;
    height: 100vh;
    @media only screen and (max-width: 426px) {
        display: flex;
        flex-direction: column;
    }
`;
export const DivConteiner = styled.div`
    background-color: #FF8081;
    @media only screen and (max-width: 426px) {
        height: 225vh;
    }
    
`;
export const DivConfConteiner = styled(DivConteiner)`
    display: grid;
    align-items: center;
    margin-right: 10px;
    grid-template-rows: 1fr 1fr 1fr;
    @media only screen and (max-width: 426px) {
        margin-right: 0;
        margin-top: 5px;
    }
`;