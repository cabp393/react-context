import { useDataContext } from '../context/dataContext'

useDataContext

export function ComponentE() {
  const { contextData } = useDataContext()

  return (
    <div className="compE">
      <h1> {'< Componente D-1 />'}</h1>
      <p> Data: {contextData}</p>
    </div>
  )
}
