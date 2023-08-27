import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    > h1 {
        font-size: 48px;
        color: BLACK;
    }

    > h2 {
        margin-right: 150px;
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    p {
        margin-bottom: 18px;
        font-size: 14px;
        color: black;
    }

    > a {
        margin-top: 42px;
        color: #FFFF;
    }
`;
