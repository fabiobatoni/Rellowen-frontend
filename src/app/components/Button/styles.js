import styled from 'styled-components';

export const Container = styled.button`
    width: 140%;
    background-color: #ff9700;
    color: #FFFF;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;


    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;

    &:disabled{
        opacity: 0.10;
        cursor: not-allowed;
    }

`;
