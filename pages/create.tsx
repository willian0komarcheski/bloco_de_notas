// CreateNote.tsx

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './edit/EditNote.module.css';

const CreateNote = () => {
  const [note, setNote] = useState('');
  const router = useRouter();

  const saveNote = async () => {
    try {
      const response = await fetch("http://localhost:3001/notas", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: note }),
      });
      if (!response.ok) {
        throw new Error('Erro ao criar nota');
      }
      router.push('/');
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>Criar nota</h1>
        <textarea
          className={styles.textarea}
          placeholder="Digite sua nota aqui..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className={styles.button} onClick={saveNote}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
