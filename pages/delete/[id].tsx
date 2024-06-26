// DeleteNote.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DeleteNote = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const deleteNote = async () => {
      try {
        const response = await fetch(`http://localhost:3001/notas/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Erro ao deletar nota');
        }
        router.push('/');
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    if (id) {
      deleteNote();
    }
  }, [id, router]);

  return null;
};

export default DeleteNote;
