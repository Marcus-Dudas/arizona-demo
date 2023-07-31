import styled from 'styled-components'

import { Mdata } from '../data/countyMovement.js'


export default function TextDisplay ({target}) {
    const name = target.name || 'Error'
    const text = target.text || 'Try refreshing'
    const net = (name) => {
        if (Mdata[name]?.change > 0) {
            return '#32a852'
        } else {
            return '#a83e32'
        }
    }
    const dataExists = Mdata[name];
    const change = dataExists ? `${Mdata[name].change.toFixed(2)}%` : '';
    //TODO: format with css, not non breaking spaces, sheesh
    return(
        <TextContainer>
            <State net={net(name)}>
                <h2>{name}</h2>&nbsp;&nbsp;
                <p>{change}</p>
            </State>
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
        height: 60%;
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
const State = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: white;
    margin: 0;
    padding: 0px;
    padding-top: 20px;

    h2, p {
        font-size: 2em;  // you can adjust the font size as needed
    }
    p{
        font-size: 1rem;
        color: ${({ net }) => net}; // use the net prop here
    }

    @media (max-width: 1366px) {
        h2, p {
            font-size: 1rem;
        }
        p{
            font-size: 1rem
        }
    }

    @media (max-width: 1024px) {
        h2, p {
            font-size: 1rem;
        }
        p{
            font-size: 1rem
        }
    }

    @media (max-width: 767px) {
        padding-top: 10px;
        h2, p {
            font-size: 1rem;
        }
        p{
            font-size: .5rem
        }
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
    ::-webkit-scrollbar {
        width: 6px;               /
    }
    ::-webkit-scrollbar-track {
        background: navyblue;        
    }
    ::-webkit-scrollbar-thumb {
        background-color: navyblue;    
        border-radius: 20px;       
        border: 1px solid #95fcf2;
    }

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
        @media (max-width: 767px) {
            padding: .5rem;
            margin: .5rem;
          }
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
          @media (max-width: 767px) {
            font-size: x-small;
            padding: .25rem;
            margin: .25rem;
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
        margin: 0;
      }
`;