'use client';

import { Inicio } from '@/components/Inicio';
import { Servicos } from '@/components/Servicos';
import { Sobre } from '@/components/Sobre';

export default function HomePage() {
  return (
    <>
      <Inicio />
      <Sobre />
      <Servicos />
    </>
  );
}
