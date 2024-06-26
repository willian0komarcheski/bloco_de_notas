import React from 'react';
import Link from 'next/link';
import '../src/app/globals.css';
import 'tailwindcss/tailwind.css';
import styles from './note.module.css';

interface NoteProps {
  color: string;
  text: string;
  id: string; // Add the id prop
}

const Note: React.FC<NoteProps> = ({ color, text, id }) => {
  return (
    <div className={styles.note} style={{ backgroundColor: color }}>
      <p>{text}</p>
      <div>
        <Link href={`/edit/${id}`}>
          Editar
        </Link>
        <Link href={`/delete/${id}`}>
          Deletar
        </Link>
      </div>
    </div>
  );
};

export default Note;
