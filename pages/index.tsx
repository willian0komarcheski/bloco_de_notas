// index.tsx

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Note from './note';
import styles from './index.module.css';

const Index: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:3001/notas'); // Substitua pela sua URL da API
      if (!response.ok) {
        throw new Error('Erro ao buscar notas');
      }
      const data = await response.json();
      setNotes(data.map((note: any) => note.content));
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <div className={styles.arrumar}>
        <Link href="/create" className={styles.createNote}>
          Criar nova nota
        </Link>
      </div>
      <div className={`${styles.grid} mt-8`}>
        {notes.map((note, index) => (
          <div key={index.toString()} className={styles.note}>
            <Note color={'#3B82F6'} text={note} editLink={`/edit/${index}`} deleteLink={`/delete/${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
