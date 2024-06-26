import Link from 'next/link';
import { useState, useEffect } from 'react';
import Note from './note';
import styles from './index.module.css';

interface NoteData {
  _id: string;
  content: string;
}

const Index: React.FC = () => {
  const [notes, setNotes] = useState<NoteData[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:3001/notas');
      if (!response.ok) {
        throw new Error('Erro ao buscar notas');
      }
      const data = await response.json();
      setNotes(data);
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
        {notes.map((note) => (
          <div key={note._id} className={styles.note}>
            <Note color={'#3B82F6'} text={note.content} id={note._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
