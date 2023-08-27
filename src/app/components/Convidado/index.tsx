import { Container } from './styles';

interface Props {
    nome: string;
    cidade: string;
    qtdPessoas: string;
}

export function Convidado(props: Props) {

    return(
        <Container>
            <h1>{props.nome}</h1>

            <p>Cidade: {props.cidade}</p>

            <p>Quantidade de Pessoas: {props.qtdPessoas}</p>
        </Container>
    )
}
