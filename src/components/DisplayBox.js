import styled from 'styled-components'
import TextDisplay from './TextDisplay'
import SceneDisplay from './SceneDisplay'
import {useEffect, useState} from 'react'



export default function DisplayBox ({data}) {
    const [target, setTarget] = useState({name: null, text: null})

    const setText = (string) => {
        setTarget(data[string])
    }




    return(
        <Display>
            <TextDisplay target={target} />
            <SceneDisplay setText={setText} />
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