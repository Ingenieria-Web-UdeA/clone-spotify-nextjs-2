import { TestComponent, TestComponent2 } from '@/components/TestComponent';
import React from 'react';

const TestPage = () => {
  return (
    <div>
      <span>Pagina Test</span>
      <TestComponent name='Daniel' lastName='Saldarriaga' email='c@c.com' age={10} />
      <TestComponent name='Simón' lastName='Pérez' email='p@p.com' age={20} />
      <TestComponent2>
        <span>Hola Mundo</span>
      </TestComponent2>
      <TestComponent2>
        <span>Hola Mundo 2</span>
      </TestComponent2>
    </div>
  );
};

export default TestPage;
