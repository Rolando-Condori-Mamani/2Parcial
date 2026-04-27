import Circle from "../atoms/Circle"

function Header() {
  return (
    <div className="card-header">

      <div className="left">
        <Circle number={1} />
        <span className="title">Agenda/Topic</span>
      </div>

      <div className="right">
        <span className="code">SAAS-0000</span>
        <span className="icon">◆</span>
      </div>

    </div>
  )
}

export default Header