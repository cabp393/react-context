import { useDataContext } from '../context/dataContext'
import { CompBase } from './compBase'

export function ComponentF() {
  const { contextData } = useDataContext()

  return (
    <CompBase title="A-1" type="subComp">
      <h2> Data: {contextData}</h2>
    </CompBase>
  )
}
