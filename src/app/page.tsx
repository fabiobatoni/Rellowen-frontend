"use client"

import { useState } from 'react';
import { api } from '../service/api';
import { Button } from './components/Button';
import { Input } from "./components/Input";
import { Container, Form } from "./styles";

export default function Home() {

  const [name, setName] = useState<string>("");
  const [qtdPessoas, setQtdPessoas] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");

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
          <Input type="text" placeholder='Nome' onChange={e => setName(e.target.value)}/>

          <Input type="text" placeholder='Quantidade de Pessoas' onChange={e => setQtdPessoas(e.target.value)}/>

           <Input type="text" placeholder='Cidade' onChange={e => setCidade(e.target.value)}/>
          <Button onClick={CriarNovoConvidado}/>
        </Form>
       </Container>
    </main>
  )
}
