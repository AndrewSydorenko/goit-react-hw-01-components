import styled from "styled-components";



export const StatsItem = styled.li`
background-color: ${({ label }) => {
    switch (label) {
        case 'docx':
            
            return '#4FC5F3';
        case 'pdf':
            
            return '#A43CF5';
        case 'mp3':
            
            return '#E54D63';
        case 'psd':
        
            return '#4FC5F3';
        
        default:

            return 'grey';
    }
}}`