import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css';

const EditNote = () => {
  const [note, setNote] = useState('')
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    // Carregar nota do localStorage
    const notes = JSON.parse(localStorage.getItem('notes') || '[]')
    setNote(notes[id as string] || '')
  }, [id])

  const saveNote = () => {
    // Salvar nota editada no localStorage
    const notes = JSON.parse(localStorage.getItem('notes') || '[]')
    notes[id as string] = note
    localStorage.setItem('notes', JSON.stringify(notes))

    // Redirecionar para a página inicial
    router.push('/')
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Editar nota</h1>
      <textarea className="w-full h-60 p-2 border rounded mb-4" value={note} onChange={e => setNote(e.target.value)} />
      <button className="w-full py-2 bg-blue-500 text-white rounded" onClick={saveNote}>Salvar</button>
    </div>
  )
}

export default EditNote
