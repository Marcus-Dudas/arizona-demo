import styled from 'styled-components'
import TextDisplay from './TextDisplay'
import SceneDisplay from './SceneDisplay'
import {useState} from 'react'
import OverlayOptions from './OverlayOptions'

export default function DisplayBox ({data}) {
    const [target, setTarget] = useState(data.Arizona)
    const [visibility, setVisibility] = useState({
        'Cities': false,
        'Reservations': false,
        'Interstates': false,
        'States': false,
        'Movement': false,
    })

    const setText = (string) => {
        setTarget(data[string])
    }

    const handleOvButton = (label) =>{
        setVisibility(prevState => ({
            ...prevState,
            [label]: !prevState[label]
        }))
    }

    return(
        <Display>
            <TextDisplay target={target} />
            <OverlayOptions handleOvButton={handleOvButton}/>
            <SceneDisplay setText={setText} target={target} visibility={visibility} handleOvButton={handleOvButton} />
        </Display>
    )
}

const Display = styled.section`
    --az-blue: #2b3e72;
    --az-blue-deep: #111d3e;
    --az-blue-dark: #07152f;
    --az-panel: rgba(7, 21, 47, 0.58);
    --az-panel-strong: rgba(7, 21, 47, 0.78);
    --az-line: rgba(149, 252, 242, 0.28);
    --az-line-soft: rgba(149, 252, 242, 0.14);
    --az-line-strong: rgba(149, 252, 242, 0.62);
    --az-text: rgba(245, 253, 253, 0.94);
    --az-muted: rgba(245, 253, 253, 0.64);
    --az-accent: #95fcf2;
    --az-link: #6ea5ff;
    --az-warm: #eb9234;

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    gap: 14px;

    height: 80vh;
    width: 85vw;
    min-height: 620px;
    max-width: 1700px;
    margin: 0 auto;
    padding: 0;

    color: var(--az-text);
    background: transparent;
    border: none;
    box-shadow: none;
    overflow: visible;
    box-sizing: border-box;

    *,
    *::before,
    *::after{
        box-sizing: border-box;
    }

    @media (max-width: 1366px) {
        width: 88vw;
        height: 80vh;
        min-height: 560px;
        gap: 12px;
    }

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        width: 90vw;
        height: auto;
        min-height: 0;
    }

    @media (max-width: 767px) {
        width: 95vw;
        gap: 8px;
    }
`