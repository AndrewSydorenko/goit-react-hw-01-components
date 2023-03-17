import styled from "styled-components";



export const OnlineStatus = styled.span`
background-color: ${({ isOnline }) => {
switch (isOnline) {
        case true:
        
        return 'green';
    case false:
        
            return 'red';

    default:
        
            return 'grey';
    }
}}`