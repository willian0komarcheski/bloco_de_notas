// EditNote.js

import '../../src/app/globals.css';
import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './EditNote.module.css';

const EditNote = () => {
  const [note, setNote] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Carregar nota do localStorage
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNote(notes[id as string] || '');
  }, [id]);

  const saveNote = () => {
    // Salvar nota editada no localStorage
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes[id as string] = note;
    localStorage.setItem('notes', JSON.stringify(notes));

    // Redirecionar para a página inicial
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>Editar nota</h1>
        <textarea
          className={styles.textarea}
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

export default EditNote;
