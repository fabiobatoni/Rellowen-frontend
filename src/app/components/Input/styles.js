import styled from 'styled-components';

export const Container = styled.div`
    width: 140%;
    display: flex;
    align-items: center;

    background-color: #FFFF;
    color: black;

    margin: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        font-weight: bold;

        padding: 12px;

        color: gray;
        background: transparent;
        border: 0;

        &:focus {
          color: #4c0099;
        }

    }


`;
