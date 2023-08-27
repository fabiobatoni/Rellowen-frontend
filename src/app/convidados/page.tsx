"use client"
import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { Convidado } from '../components/Convidado';
import { Container, Content } from './styles';

export default function Convidados() {

    const [convidados, setConvidados] = useState<any[]>([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/convidados`)

            setConvidados(response.data.convidados);
        }
        fetchMovies()
    })

    let soma = 0;
    convidados.forEach(function(conv, i) {

        soma += parseInt(conv.qtdPessoas);
    })

    return(
        <Container>

            <h1>Lista de Convidados </h1>

            <h2>Confirmados: {soma} </h2>

            <Content>

            {
                convidados.map(convidado => (
                    <Convidado
                    key={convidado.id}
                    nome={convidado.name}
                    qtdPessoas={convidado.qtdPessoas}
                    cidade={convidado.cidade}
                    />
                ))
            }

            </Content>
        </Container>
    )
}
