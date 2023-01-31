import styled from "styled-components";

export function Navbar(){
    const NavbarContainer = styled.header`
        box-sizing: border-box;
        background-color: #f09ca4;
        border: 2px solid #898888;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
    `;
    return(
    <NavbarContainer>
        <h3>Teste ReactJS - SaibWeb</h3>
    </NavbarContainer>
)
};

