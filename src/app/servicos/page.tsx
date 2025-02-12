'use client';
import Link from 'next/link';
import { Container, Lista } from './style';

export default function ServicosPage() {
  return (
    <Container>
      <h1>Nossos Serviços</h1>
      <Lista></Lista>
      <Link href="/">Voltar para Home</Link>
    </Container>
  );
}
