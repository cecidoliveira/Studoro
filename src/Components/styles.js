import styled from "styled-components";

export const SectionApp = styled.section`
    font-family: 'Lobster Two', cursive;
    display:grid;
    grid-template-areas:'task temp conf';
    grid-template-columns: 400px 45%;
    background-color: #FF8081;
    height: 100vh;
`;
export const DivConfConteiner = styled.div`
    display: grid;
    align-items: center;
    margin-right: 10px;
    grid-template-rows: 1fr 1fr 1fr;
`;