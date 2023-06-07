import styled from 'styled-components'
import TextDisplay from './TextDisplay'
import SceneDisplay from './SceneDisplay'
import {useEffect, useState} from 'react'
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
    //rename: passText? until context implemented
    const setText = (string) => {
        setTarget(data[string])
    }
    const handleOvButton = (label) =>{
        setVisibility(prevState => ({
            ...prevState,
            [label]: !prevState[label]
        }))
    }



//provisional solution: passing target back down all the way to SceneDisplay and AnimatedMesh so all are aware of current selection
    return(
        <Display>
            <TextDisplay target={target} />
            <OverlayOptions handleOvButton={handleOvButton}/>
            <SceneDisplay setText={setText} target={target} visibility={visibility} handleOvButton={handleOvButton} />
        </Display>
    )
}

//styles
const Display = styled.div`
    display: flex;
    flex-direction: row;
    height: 80vh;
    width: 85vw;
    justify-content: center;

    @media (max-width: 1366px) {
        flex-direction: row;
        font-size: medium;
        align-items: center;
    }

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        font-size: medium;
    }
    @media (max-width: 767px) {
        flex-direction: column-reverse;
        font-size: xx-small;
      }
`;