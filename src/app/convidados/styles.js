import styled from 'styled-components';

export const Container = styled.div `
    height: 100%;

    > h1 {
        margin-bottom: 100px;
        margin-left: 150px;
        margin-top: 100px;
        color: #ff9700;
    }

    > h2 {
        margin-bottom: 100px;
        margin-left: 150px;
        margin-top: 100px;
        color: #FFFF;
    }

`;


export const Content = styled.div `
    margin: 10px 230px;
    height: 600px;
    overflow: auto;

    @media only screen and (max-width: 786px) {
  /* For mobile phones: */
    margin: 0 auto;
    width: 300px;

}
`;


