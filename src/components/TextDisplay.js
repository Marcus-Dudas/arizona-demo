import styled from 'styled-components'
import Stats from './Stats.js'
import { Mdata } from '../data/countyMovement.js'


export default function TextDisplay ({target}) {
    const name = target.name || 'Error'
    const text = target.text || 'Try refreshing'
    
    return(
        <TextContainer>
            <State>{name}</State>
            <Stats countyName={Mdata[name]}/>
            <Text>{text}</Text>
        </TextContainer>
    )
}

//styles
const TextContainer = styled.div`
    border: 1px solid #95fcf2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;

    @media (max-width: 1366px) {
        width: 50%;
        height: 40%;
        margin: 0;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height:40%;
    }
    @media (max-width: 767px) {
        font-size: xx-small;
        width: 100%;
        height:40%;
      }
`;
const State = styled.h2`
    color: white;
    margin: 0;
    padding: 0px;
    padding-top: 20px;
    font-size: xx-large;

    @media (max-width: 1366px) {
        font-size: large;
    }

    @media (max-width: 1024px) {
        font-size: medium;
    }
    @media (max-width: 767px) {
        padding-top: 10px;
        font-size: medium;
      }
`;
const Text = styled.div`
    width: 90%;
    height: 100%;
    color: white;
    text-decoration: none;
    margin: 1rem;
    padding: 1rem;
    padding-top: 0px;
    font-size: x-large;
    text-align: justify;
    overflow-y: scroll;
    overflow-x: hidden;

    & > p > a {
        color: #6ea5ff;
        text-decoration: none;
        &:visited {
            color: #eb9234;
        }
        &:hover {
            color: #ffe89c;
            text-decoration: ;
        }
        &:active {
            color: red;
          }
    }
    & > ul > li {
        list-style: none;
        margin-top: 3rem;
    }

    & > ul > li > a {
        text-decoration: none;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 5px;
        border: 1px solid #6ea5ff;
        color: #6ea5ff;
        

        &:visited {
            color: #eb9234;
            border: 1px solid #eb9234;
        }
        &:hover {
            color: #ffe89c;
            border: 1px solid #ffe89c;
            text-decoration: ;
        }
        &:active {
            color: red;
          }
    }

    @media (max-width: 1366px) {
        font-size: large;
        padding: 0px;
    }

    @media (max-width: 1024px) {
        font-size: medium;
        padding: 0px;
    }
    @media (max-width: 767px) {
        font-size: x-small;
        padding: 0px;
      }
`;