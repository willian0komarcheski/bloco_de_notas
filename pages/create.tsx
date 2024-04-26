// CreateNote.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './edit/EditNote.module.css';
import '../src/app/globals.css';
import 'tailwindcss/tailwind.css';


const CreateNote = () => {
  const [note, setNote] = useState('');
  const router = useRouter();

  const saveNote = () => {
    // Salvar nota no localStorage
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Redirecionar para a página inicial
    router.push('/');
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
