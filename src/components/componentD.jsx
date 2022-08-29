import { useDataContext } from '../context/dataContext'
import { CompBase } from './compBase'
import { ComponentE } from './componentE'

useDataContext

export function ComponentD() {
  const { setContextData } = useDataContext()

  return (
    <CompBase title="D" type="comp">
      <button onClick={() => setContextData(prev => prev + 1)}>Aumentar</button>
      <ComponentE />
    </CompBase>
  )
}
