import Header from "../molecules/Header"
import Text from "../atoms/Text"

function Card() {
  return (
    <div className="card">

      <Header />

      <div className="card-body">
        <Text className="description">
          Description of what is done here
        </Text>

        <hr />

        <div className="footer">
          <span>Last Updated</span>
          <span>3/8/2020</span>
        </div>
      </div>

    </div>
  )
}

export default Card