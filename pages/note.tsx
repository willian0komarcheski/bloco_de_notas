// Note.tsx

import React from 'react';
import Link from 'next/link';
import '../src/app/globals.css';
import 'tailwindcss/tailwind.css';
import styles from './note.module.css';

interface NoteProps {
  color: string;
  text: string;
  editLink: string;
  deleteLink: string;
}

const Note: React.FC<NoteProps> = ({ color, text, editLink, deleteLink }) => {
  return (
    <div className={styles.note} style={{ backgroundColor: color }}>
      <p>{text}</p>
      <div>
        <Link href={editLink}>
          Editar
        </Link>
        <Link href={deleteLink}>
          Deletar
        </Link>
      </div>
    </div>
  );
};

export default Note;
