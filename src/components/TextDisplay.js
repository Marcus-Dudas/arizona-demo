import styled from 'styled-components'


export default function TextDisplay ({target}) {
    const name = target.name || 'The Grand Canyon State'
    const text = target.text || (
                                <p> 
                                    Estimates from the U.S. census bureau place &nbsp; 
                                    <a href='https://www.census.gov/quickfacts/AZ'>
                                    7.4 million residents &nbsp; 
                                    </a>
                                    in the state of Arizona in 2022. Around 90 percent of them live in urban areas, according to a 2020&nbsp;
                                    <a href='https://crh.arizona.edu/sites/default/files/2022-03/20210702_AZ_BH_WorkforceReport_FINAL_0.pdf'>
                                        analysis &nbsp; 
                                    </a> 
                                    by the University of Arizona." <br/><br/>
                                    Go ahead and mess with the model. Drag, click, zoom, and explore 
                                    the state's 15 counties.
                                </p>
                                )
    
    return(
        <TextContainer>
            <State>{name}</State>
            <Text>{text}</Text>
        </TextContainer>
    )
}

//styles
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 67%, rgba(0,6,10,0.84) 79%, rgba(0,11,19,0.64) 93%, rgba(212,212,212,0) 100%);
    width: 35%;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
`;
const State = styled.h2`
    color: white;
    margin: 0;
    padding: 10px;
    padding-top: 20px;
    font-size: xx-large;
`;
const Text = styled.div`
    width: 80%;
    color: white;
    text-decoration: none;
    margin: 0;
    padding: 10px;
    font-size: x-large;
    text-align: justify;

    & > p > a {
        color: #6ea5ff;
        text-decoration: none;
        
        &:hover {
            color: #ffe89c;
        }
    }
`;