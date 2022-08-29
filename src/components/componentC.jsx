import { useDataContext } from '../context/dataContext'
import { CompBase } from './compBase'

export function ComponentC() {
  const { contextData, setContextData } = useDataContext()
  return (
    <CompBase title="C" type="comp">
      <button onClick={() => setContextData(prev => prev - 1)}>Reducir</button>
      <h2> Data: {contextData}</h2>
    </CompBase>
  )
}
