import { Container } from "./styles";

export function Input({...res}) {
    return(
        <Container>
            <input {...res} />
        </Container>
    )
}
