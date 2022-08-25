import { useDataContext } from '../context/dataContext'
import { ComponentE } from './componentE'

useDataContext

export function ComponentD() {
  const { setContextData } = useDataContext()

  return (
    <div className="compD">
      <h1> {'< Componente D />'}</h1>
      <button onClick={() => setContextData(prev => prev + 1)}>+</button>
      <ComponentE />
    </div>
  )
}
