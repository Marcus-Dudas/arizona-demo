import styled from 'styled-components'
import TextDisplay from './TextDisplay'
import SceneDisplay from './SceneDisplay'
import {useEffect, useState} from 'react'

export default function DisplayBox () {
    const [target, setTarget] = useState({name: null, text: null})

    const handleClick = () => {
        //when passed down to meshes, bind mesh to objects that can be set as target
        setTarget()
    }




    return(
        <Display>
            <TextDisplay target={target} />
            <SceneDisplay handler={handleClick} />
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