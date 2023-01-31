import styled from "styled-components"

export function Icon({src,alt}){
    
    const Icon = styled.img`
        width: 24px;
        height: 24px;
    `
    return(
        <Icon src={src} alt={alt}/>
    )

}