
import styled from "styled-components";
import PlusLogo from '../assets/plus.png'
import { Button } from "./Button";
import { api } from "../lib/axios";
import { TableRow } from "./TableRow";
import { useEffect, useState } from "react";
import { deleteUser } from "../services/users"
import { Icon } from "./Icon";
export function Table(){
    const [users,setUsers] = useState([])

    const fetchUsers = async () =>{
        await api.get('/v1/teste/clientes').then((response) => setUsers(response.data.data))
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    async function handleDelete(id) {
        console.log('a')
        try{
            const response = await deleteUser(id)
            if(response.sucess){
                alert(response.message)
                fetchUsers()
            }
        }catch{
            return 'vasco'
        }

    }

    const TableContainer = styled.table`
        border: 1px solid #9389BD;
        box-sizing: border-box;
        margin: 1rem auto;
        width: 85%;
        border-collapse: collapse;
        text-align: left;

        th,
        td {
            border: 1px solid black;
            border: none;
        }

        th {
            background-color:  #9389BD;
            width: 1rem;
    }

`;
    return(
    <TableContainer>
        <thead>
        <tr>
            <th><Button><Icon src={PlusLogo} alt="" /></Button></th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Cidade</th>
            <th>UF</th>
            <th>Telefone</th>
            <th>E- mail</th>
        </tr>
        </thead>
        <tbody>
            {users.map((user)=> (
                <TableRow onDelete={handleDelete} id={user.TECL_ID} name={user.TECL_NOME} address={user.TECL_ENDERECO} city={user.TECL_CIDADE} state={user.TECL_UF} phone={user.TECL_TELEFONE} email="default@email.com"/>
            ))}
            
        </tbody>
    </TableContainer>
    )
};
