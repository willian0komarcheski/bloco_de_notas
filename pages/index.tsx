// index.tsx

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../src/app/globals.css';
import 'tailwindcss/tailwind.css';
import Note from './note';
import styles from './index.module.css';

const Index: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    // Carregar notas do localStorage
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]') as string[];
    setNotes(savedNotes);
  }, []);

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
