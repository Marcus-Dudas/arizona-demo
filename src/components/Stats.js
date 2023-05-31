import styled from "styled-components"


export default function Stats ({countyName = 'Arizona'}) {
    console.log("county name:", countyName)
    return(
        <StatsDiv>
            <p>In: {countyName.in}</p>
            <p>Out: {countyName.out}</p>
        </StatsDiv>
    )
}

const StatsDiv = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: aliceblue;
    font-weight: strong;
    font-size: 700;

`;