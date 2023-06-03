import styled from 'styled-components'
import TextDisplay from './TextDisplay'
import SceneDisplay from './SceneDisplay'
import {useEffect, useState} from 'react'
import OverlayOptions from './OverlayOptions'



export default function DisplayBox ({data}) {
    const [target, setTarget] = useState(data.Arizona)

    const setText = (string) => {
        setTarget(data[string])
    }



//provisional solution: passing target back down all the way to SceneDisplay and AnimatedMesh so all are aware of current selection
    return(
        <Display>
            <TextDisplay target={target} />
            <OverlayOptions />
            <SceneDisplay setText={setText} target={target} />
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