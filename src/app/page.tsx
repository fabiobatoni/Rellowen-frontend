"use client"

import { SetStateAction, useState } from 'react';
import { api } from '../service/api';
import { Button } from './components/Button';
import { Input } from "./components/Input";
import { Container, Form } from "./styles";

export default function Home() {

  const [name, setName] = useState<string>("");
  const [qtdPessoas, setQtdPessoas] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [desabilitado, setDesabilitado] = useState<boolean>(false);

  async function CriarNovoConvidado() {

    if(!name) {
        return alert("Digite o nome da Pessoa");
    }

    if(!qtdPessoas) {
        return alert("Digite a quantidade de Pessoas");
    }

    if(!cidade) {
        return alert("Digite de qual cidade você vem");
    }

    setDesabilitado(true);

    await api.post("/convidados", {
        name,
        qtdPessoas,
        cidade,
    });

    alert("Presença confirmada!");

    window.location.reload();
}

  return (
    <main>
       <Container>
          <Form>
          <h1>Rêllowen</h1>
          <p>Confirme sua presença</p>
          <Input type="text" placeholder='Nome' onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)}/>

          <Input type="text" placeholder='Quantidade de Pessoas' onChange={(e: { target: { value: SetStateAction<string>; }; }) => setQtdPessoas(e.target.value)}/>

           <Input type="text" placeholder='Cidade' onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCidade(e.target.value)}/>
           {
            desabilitado != true ? <Button onClick={CriarNovoConvidado}/> : <Button disabled />
           }

        </Form>
       </Container>
    </main>
  )
}
