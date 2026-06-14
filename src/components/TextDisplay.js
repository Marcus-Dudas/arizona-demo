import styled from 'styled-components'

import { Mdata } from '../data/countyMovement.js'

export default function TextDisplay ({target}) {
    const name = target.name || 'Error'
    const text = target.text || 'Try refreshing'

    const net = (name) => {
        if (Mdata[name]?.change > 0) {
            return '#32a852'
        } else {
            return '#a83e32'
        }
    }

    const dataExists = Mdata[name]
    const change = dataExists ? `${Mdata[name].change.toFixed(2)}%` : ''

    return(
        <TextContainer>
            <Header>
                <MetaRow>
                    <Label>selected county</Label>
                    {change && <Change $net={net(name)}>{change}</Change>}
                </MetaRow>

                <CountyName>{name}</CountyName>
            </Header>

            <Text>{text}</Text>
        </TextContainer>
    )
}

const TextContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 31%;
    height: 100%;
    min-width: 320px;
    margin: 0;
    padding: 0;
    overflow: hidden;

    color: var(--az-text);
    background:
        linear-gradient(180deg, rgba(2, 5, 17, 0.9) 0%, rgba(2, 5, 15, 0.96) 80%);
    border: none;
    border-radius: 0;
    box-shadow: none;
      
    @media (max-width: 1366px) {
        width: 34%;
        min-width: 285px;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 38vh;
        min-height: 300px;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 38vh;
        min-height: 250px;
    }
`

const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 22px 22px 20px;
    background:
        linear-gradient(180deg, rgba(14, 25, 58, 0.44) 0%, rgba(4, 8, 24, 0) 100%);
    border: none;
    box-shadow: none;

    @media (max-width: 1366px) {
        padding: 18px 18px 17px;
    }

    @media (max-width: 767px) {
        padding: 14px 13px 13px;
    }
`

const MetaRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    margin: 0 0 18px;
    padding: 0;
`

const Label = styled.span`
    display: block;
    margin: 0;
    padding: 0;
    color: rgba(181, 218, 219, 0.58);
    font-size: .62rem;
    line-height: .85rem;
    font-weight: 800;
    letter-spacing: 2.2px;
    text-align: left;
    text-transform: uppercase;
`

const Change = styled.p`
    flex: 0 0 auto;
    margin: 0;
    padding: 0;
    color: ${({ $net }) => $net};
    font-size: .8rem;
    line-height: 1rem;
    font-weight: 900;
    letter-spacing: 1.4px;
`

const CountyName = styled.h2`
    max-width: 100%;
    margin: 0;
    padding: 0;
    color: rgba(244, 238, 222, 0.96);
    font-size: clamp(1.55rem, 2.25vw, 2.45rem);
    line-height: 1;
    font-weight: 900;
    letter-spacing: -.055em;
    white-space: nowrap;

    @media (max-width: 1366px) {
        font-size: clamp(1.35rem, 2vw, 2rem);
        line-height: 1;
    }

    @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 1;
        letter-spacing: -.045em;
        white-space: normal;
    }
`

const Text = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    margin: 0;
    padding: 0 22px 22px;
    overflow-y: auto;
    overflow-x: hidden;

    color: rgba(232, 232, 220, 0.82);
    background: transparent;
    text-align: left;
    text-shadow: none;
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.62rem;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(2, 5, 15, 0.9);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(181, 218, 219, 0.22);
        border-radius: 0;
        border: none;
    }

    & > p{
        margin: 0 0 1rem;
        padding: 0;
    }

    & > p:last-child{
        margin-bottom: 0;
    }

    & > p > a {
        color: rgba(144, 185, 227, 0.95);
        text-decoration: none;

        &:visited {
            color: rgba(211, 158, 99, 0.95);
        }

        &:hover {
            color: rgba(244, 238, 222, 0.98);
        }

        &:active {
            color: rgba(255, 167, 94, 0.95);
        }
    }

    & > ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 1.1rem 0 0;
        padding: 0;
    }

    & > ul > li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    & > ul > li > a {
        display: inline-flex;
        align-items: center;
        min-height: 34px;
        padding: 0;
        text-decoration: none;
        text-shadow: none;
        background: transparent;
        font-size: .9rem;
        line-height: 1rem;
        font-weight: 800;
        border: none;
        border-radius: 0;
        color: rgba(144, 185, 227, 0.95);
        transition:
            color 160ms ease,
            transform 160ms ease;

        &:visited {
            color: rgba(211, 158, 99, 0.95);
        }

        &:hover {
            color: rgba(244, 238, 222, 0.98);
            transform: translateX(3px);
        }

        &:active {
            color: rgba(255, 167, 94, 0.95);
        }
    }

    @media (max-width: 1366px) {
        padding: 0 18px 18px;
        font-size: .94rem;
        line-height: 1.5rem;
    }

    @media (max-width: 1024px) {
        padding: 0 16px 16px;
        font-size: .92rem;
    }

    @media (max-width: 767px) {
        padding: 0 13px 13px;
        font-size: .78rem;
        line-height: 1.25rem;

        & > ul{
            gap: 8px;
        }

        & > ul > li > a {
            min-height: 28px;
            font-size: x-small;
            padding: 0;
        }
    }
`