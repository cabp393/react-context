export function CompBase({ title, type, children }) {
  return (
    <div className={`${type} data`} key={Math.random()}>
      <div> {`< Componente ${title} />`}</div>
      <div className="compContent">{children}</div>
    </div>
  )
}
