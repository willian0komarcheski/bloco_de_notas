// Note.tsx
import React from 'react';
import 'tailwindcss/tailwind.css';
import styles from './note.module.css'; // Importe as classes do CSS Module

interface NoteProps {
  color: string;
  text: string;
  editLink: string;
}

const Note: React.FC<NoteProps> = ({ color, text, editLink }) => {
  return (
    <div className={styles.note} style={{ backgroundColor: color }}> {/* Utilize a classe do CSS Module */}
      <p>{text}</p>
      <a href={editLink}>Editar</a>
    </div>
  );
};

export default Note;
