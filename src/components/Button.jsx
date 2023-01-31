import styled from "styled-components";



export function Button({children,...rest}){
 const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    background: none;
 `
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    )
}