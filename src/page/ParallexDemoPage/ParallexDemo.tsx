import React from "react"
import ParallexComponent from "../../components/ParallexComponent"
import Image from "../../assets/thumbnail.jpg"
interface Props {}

const ParallexDemo = (props: Props) => {
  return (
    <div style={{}}>
      <div
        style={{
          height: "100vh",
          background: "#F2F2F0",
        }}
      >
        <ParallexComponent ratio={0.2} axis="horizontal">
          <img src={Image} alt="thumbnail" style={{ height: "200px" }} />
        </ParallexComponent>
      </div>

      <div
        style={{
          height: "100vh",
          background: "#FED7DA",
        }}
      >
        <ParallexComponent reverse={true}>
          <div
            style={{
              height: "200px",
              width: "200px",
              background: "grey",
              display: "inline-block",
            }}
          >
            <img src={Image} alt="thumbnail" style={{ height: "200px" }} />
          </div>
        </ParallexComponent>
        <div> This Is test</div>
      </div>
    </div>
  )
}

export default ParallexDemo
