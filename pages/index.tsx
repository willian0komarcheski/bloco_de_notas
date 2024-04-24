// index.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import Note from './note';
import styles from './index.module.css';

const Index: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    // Carregar notas do localStorage
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]') as string[];
    setNotes(savedNotes);
  }, []);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(notes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setNotes(items);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Bloco de notas</h1>
      <Link href="/create" className="text-blue-500">
        Criar nova nota
      </Link>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="notes">
          {(provided) => (
            <div className={`${styles.grid} mt-4`} {...provided.droppableProps} ref={provided.innerRef}>
              {notes.map((note, index) => (
                <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Note color={'#3B82F6'} text={note} editLink={`/edit/${index}`} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Index;
