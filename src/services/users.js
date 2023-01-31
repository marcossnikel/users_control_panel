import { api } from "../lib/axios";


//Delete
export async function deleteUser(id){
    try{
        const response = await api.delete(`/v1/teste/cliente/${id}`)
        return response.data
    }catch{
        return 'ERRO AO DELETAR USUARIO'
    }

}