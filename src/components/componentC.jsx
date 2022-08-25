import { useDataContext } from '../context/dataContext'

export function ComponentC() {
  const { setContextData } = useDataContext()
  return (
    <div className="compC">
      <h1> {'< Componente C />'}</h1>
      <button onClick={() => setContextData(prev => prev - 1)}>-</button>
    </div>
  )
}
