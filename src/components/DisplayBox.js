import styled from 'styled-components'
import TextDisplay from './TextDisplay'
import SceneDisplay from './SceneDisplay'
import {useEffect, useState} from 'react'

export default function DisplayBox () {
    const [target, setTarget] = useState({name: null, text: null})

    const setText = (string) => {
        setTarget(string)
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
    justify-content: space-around;
`;