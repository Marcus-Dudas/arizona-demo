import styled from "styled-components"
import {useState} from 'react'

export default function OverlayOptions ({handleOvButton}) {
    const [selected, setSelected] = useState({
        'Cities': false,
        'Reservations': false,
        'Interstates': false,
        'States': false,
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
            <OvButton onClick={() => handleClick('Cities')} selected={selected['Cities']}>Cities</OvButton>
            <OvButton onClick={() => handleClick('Reservations')} selected={selected['Reservations']}>Reservations</OvButton>
            <OvButton onClick={() => handleClick('Interstates')} selected={selected['Interstates']}>Interstates</OvButton>
            <OvButton onClick={() => handleClick('States')} selected={selected['States']}>States</OvButton>
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
        height:10%;
        flex-direction: column;
        justify-content: space-around;
    }

    @media (max-width: 1024px) {
        height:10%;
        flex-direction: row;
        justify-content: space-around;
    }
    @media (max-width: 767px) {
        height:10%;
        flex-direction: row;
        justify-content: space-around;
      }
`;

const Button = styled.button`
    all: unset;
    margin-bottom: 1rem;
    font-weight: 700;
    min-height: 3rem;
    border: 1px solid #95fcf2;
    
    color: ${props => props.selected ? 'gray' : 'aliceblue'};
    background-color: ${props => props.selected ? '#ffe89c' : 'none'};

    &: hover{
        color: #eb9234;
        background-color: rgba(255, 255, 255, .25);
    }

    @media (max-width: 1366px) {
        margin:0;
        margin-bottom: 0rem;
        margin-right: 1rem;
        width: 7rem;
        min-height:3rem;
    }

    @media (max-width: 1024px) {
        margin:0;
        margin-bottom: 0rem;
        margin-right: 1rem;
        width: 7rem;
        min-height:3rem;
    }
    @media (max-width: 767px) {
        margin:0;
        margin-bottom: 0rem;
        margin-right: 1rem;
        width: 4rem;
        height:3rem;
      }
`;
