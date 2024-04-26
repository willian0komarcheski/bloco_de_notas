// DeleteNote.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DeleteNote = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Deletar nota do localStorage
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.splice(id as string, 1);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Redirecionar para a página inicial
    router.push('/');
  }, [id]);

  return null;
};

export default DeleteNote;
