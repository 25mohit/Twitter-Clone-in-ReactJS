import styled from 'styled-components'

export const TabPanelWrapper = styled.div`
    background-color: red;
    
    input{
        border: none;
        padding: ${20+20}px 20px;
        @media screen and (max-width:480px){
            background: green;
        }
    }
`