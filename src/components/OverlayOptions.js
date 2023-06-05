import styled from "styled-components"
import {useState} from 'react'

export default function OverlayOptions ({handleOvButton}) {
    const [selected, setSelected] = useState({
        'Places': false,
        'Climate': false,
        'Movement': false,
    });

    const handleClick = (label) =>{
        handleOvButton(label)
        setSelected(prevState => ({
            ...prevState,
            [label]: !prevState[label]
        }));
    }

    return(
        <ButtonDiv>
            <OvButton onClick={() => handleClick('Places')} selected={selected['Places']}>Places</OvButton>
            <OvButton onClick={() => handleClick('Climate')} selected={selected['Climate']}>Regions</OvButton>
            <OvButton onClick={() => handleClick('Movement')} selected={selected['Movement']}>Movement</OvButton>
        </ButtonDiv>
    )
}

const OvButton = ({onClick, children, selected}) => {
    return(
        <Button onClick={onClick} selected={selected}>{children}</Button>
    )
}

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height:100%;
    width: auto;

    margin: 1rem;
    margin-top: 0px;

    @media (max-width: 1366px) {
        flex-direction: row;
        justify-content: space-around;
    }

    @media (max-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
    }
    @media (max-width: 767px) {
        flex-direction: row;
        justify-content: space-around;
      }
`;

const Button = styled.button`
    all: unset;
    margin-bottom: 1rem;
    font-weight: 700;
    width: 5rem;
    height:5rem;
    border: 1px solid #95fcf2;
    border-radius: 50%;
    color: ${props => props.selected ? 'gray' : 'aliceblue'};
    background-color: ${props => props.selected ? '#ffe89c' : 'none'};

    &: hover{
        color: #6ea5ff;
        background-color: #ffe89c;
    }

    @media (max-width: 1366px) {
        margin:0;
        margin-right: 1rem;
        width: 3rem;
        height:3rem;
    }

    @media (max-width: 1024px) {
        margin:0;
        margin-right: 1rem;
        width: 3rem;
        height:3rem;
    }
    @media (max-width: 767px) {
        margin:0;
        margin-right: 1rem;
        width: 3rem;
        height:3rem;
      }
`;
