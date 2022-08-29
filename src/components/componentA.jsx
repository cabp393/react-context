import { CompBase } from './compBase'
import { ComponentF } from './componentF'
import { ComponentG } from './componentG'

export function ComponentA() {
  return (
    <CompBase title="A" type="comp">
      <h2>hola</h2>
      <ComponentF />
      <ComponentG />
    </CompBase>
  )
}
