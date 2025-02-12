'use client';
import Link from 'next/link';
import { Container } from './style';

export default function SobrePage() {
  return (
    <Container>
      <h1>Sobre Nós</h1>
      <p>Somos uma empresa dedicada à inovação!</p>
      <Link href="/">Voltar para Home</Link>
    </Container>
  );
}
