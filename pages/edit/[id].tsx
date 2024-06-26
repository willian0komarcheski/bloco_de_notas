import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './EditNote.module.css';

const EditNote = () => {
  const [note, setNote] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchNote();
  }, [id]);

  const fetchNote = async () => {
    try {
      const response = await fetch(`http://localhost:3001/notas/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar nota');
      }
      const data = await response.json();
      setNote(data.content);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const saveNote = async () => {
    try {
      const response = await fetch(`http://localhost:3001/notas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: note }),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar nota');
      }
      router.push('/');
    } catch (error) {
      console.error('Erro:', error);
    }
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
