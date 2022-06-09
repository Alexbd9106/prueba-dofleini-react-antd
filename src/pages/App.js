import React from "react";

import ConfigComponent from "../components/ConfigComponent";
import SVGComponent from "../components/SVGComponent";

import { Row, Col } from "antd";

function App() {
  const [avatar, setAvatar] = React.useState("");
  const [nombreEspacio, setNombreEspacio] = React.useState("");
  const [urlEspacio, setURLEspacio] = React.useState("");
  const [personas, setPersonas] = React.useState("");
  const [color, setColor] = React.useState("#48b5fe");
  const [privacidad, setPrivacidad] = React.useState("");

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  const handleChangeNombreEspacio = (e) => {
    setNombreEspacio(e.target.value);
  };

  const handleChangeURLEspacio = (e) => {
    setURLEspacio(e.target.value);
  };

  const handleSelectPersonas = (e) => {
    setPersonas(e.target.textContent);
  };

  const handleSelectColor = (e) => {
    setColor(e.target.name);
  };

  const handleChangeColor = (color) => {
    setColor(color.hex);
  };

  const handleChangePrivacidad = (e) => {
    setPrivacidad(e.target.value);
  };

  return (
    <>
      <Row className="App__row">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ConfigComponent
            avatar={avatar}
            setAvatar={setAvatar}
            updateAvatar={updateAvatar}
            nombreEspacio={nombreEspacio}
            setNombreEspacio={setNombreEspacio}
            handleChangeNombreEspacio={handleChangeNombreEspacio}
            urlEspacio={urlEspacio}
            setURLEspacio={setURLEspacio}
            handleChangeURLEspacio={handleChangeURLEspacio}
            personas={personas}
            setPersonas={setPersonas}
            handleSelectPersonas={handleSelectPersonas}
            color={color}
            setColor={setColor}
            handleSelectColor={handleSelectColor}
            handleChangeColor={handleChangeColor}
            privacidad={privacidad}
            setPrivacidad={setPrivacidad}
            handleChangePrivacidad={handleChangePrivacidad}
          />
        </Col>
        <Col xs={0} sm={0} md={8} lg={5} xl={2}></Col>
        <Col xs={0} sm={0} md={4} lg={7} xl={10}>
          <SVGComponent
            avatar={avatar}
            nombreEspacio={nombreEspacio}
            urlEspacio={urlEspacio}
            personas={personas}
            color={color}
            privacidad={privacidad}
          />
        </Col>
      </Row>
    </>
  );
}

export default App;
