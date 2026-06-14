import styled from "styled-components"
import {useState} from 'react'

export default function OverlayOptions ({handleOvButton}) {
    const [selected, setSelected] = useState({
        'Cities': false,
        'Reservations': false,
        'Interstates': false,
        'States': false,
        'Movement': false,
    })

    const handleClick = (label) =>{
        handleOvButton(label)
        setSelected(prevState => ({
            ...prevState,
            [label]: !prevState[label]
        }))
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
        <Button onClick={onClick} $selected={selected}>{children}</Button>
    )
}

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 10px;

    height: 100%;
    width: 8.5rem;
    flex: 0 0 8.5rem;
    min-width: 8.5rem;

    margin: 0;
    padding: 0;

    @media (max-width: 1366px) {
        width: 7.8rem;
        flex-basis: 7.8rem;
        min-width: 7.8rem;
        gap: 8px;
    }

    @media (max-width: 1024px) {
        width: 100%;
        min-width: 0;
        flex: 0 0 auto;
        height: auto;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        gap: 6px;
        overflow: hidden;
        padding: 0;
    }

    @media (max-width: 767px) {
        width: 100%;
        gap: 4px;
    }
`

const Button = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    width: 100%;
    padding: 0 10px;
    cursor: pointer;

    color: ${props => props.$selected ? 'rgb(7, 21, 47)' : 'rgba(245, 253, 253, 0.84)'};
    background-color: ${props => props.$selected ? 'rgba(149, 252, 242, 0.92)' : 'rgba(7, 21, 47, 0.56)'};
    border: 1px solid ${props => props.$selected ? 'rgba(149, 252, 242, 0.92)' : 'rgba(149, 252, 242, 0.28)'};
    border-radius: 3px;

    font-size: .72rem;
    line-height: 1rem;
    font-weight: 800;
    letter-spacing: 1.4px;
    text-align: center;
    text-transform: uppercase;

    transition:
        color 160ms ease,
        background-color 160ms ease,
        border-color 160ms ease,
        transform 160ms ease;

    &:hover{
        color: ${props => props.$selected ? 'rgb(7, 21, 47)' : 'white'};
        background-color: ${props => props.$selected ? 'rgba(149, 252, 242, 1)' : 'rgba(43, 62, 114, 0.72)'};
        border-color: var(--az-line-strong);
        transform: translateX(3px);
    }

    &:focus-visible{
        outline: 1px solid rgba(149, 252, 242, 0.8);
        outline-offset: -3px;
    }

    @media (max-width: 1024px) {
        flex: 1 1 0;
        width: auto;
        min-width: 0;
        min-height: 2.35rem;
        padding: 0 4px;
        font-size: .58rem;
        letter-spacing: .7px;
    
        &:hover{
            transform: none;
        }
    }
    
    @media (max-width: 767px) {
        min-width: 0;
        min-height: 2rem;
        padding: 0 3px;
        font-size: .48rem;
        letter-spacing: .45px;
    }
`