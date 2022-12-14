import { useDataContext } from '../context/dataContext'
import { CompBase } from './compBase'

useDataContext

export function ComponentE() {
  const { contextData } = useDataContext()

  return (
    <CompBase title="D-1" type="subComp">
      <h2> Data: {contextData}</h2>
    </CompBase>
  )
}
