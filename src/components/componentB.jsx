import { useDataContext } from '../context/dataContext'

useDataContext

export function ComponentB() {
  const { contextData } = useDataContext()

  return (
    <div className="compB">
      <h1> {'< Componente B />'}</h1>
      <p>Data: {contextData}</p>
    </div>
  )
}
