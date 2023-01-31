import styled from "styled-components"
import { Button } from "./Button"
import DELETE_ICON from '../assets/minus.png'
import EDIT_ICON from '../assets/edit.png'
import { Icon } from "./Icon"

export function TableRow({onDelete,id,name,address,city,state,phone,email}){

    const Row = styled.tr`
        border-top: none;
        border: 1px solid #9389BD;
    `

    const RowContent = styled.td`
    `
    return(
        <Row>
            <RowContent>
                <Button onClick={() => onDelete(id)}><Icon src={DELETE_ICON} alt="MINUS BUTTON" /></Button>
                <Button><Icon src={EDIT_ICON} alt="EDIT BUTTON" /></Button>
            </RowContent>
            <RowContent>{name}</RowContent>
            <RowContent>{address}</RowContent>
            <RowContent>{city}</RowContent>
            <RowContent>{state}</RowContent>
            <RowContent>{phone}</RowContent>
            <RowContent>{email}</RowContent>
        </Row>

    )
}

