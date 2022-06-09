import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Form, Input, Radio, Row, Space, Typography } from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";

import GetAvatar from "./GetAvatar";

import { CompactPicker } from "react-color";

function ConfigComponent(props) {
  const Text = Typography;

  const [colorState, setColorState] = React.useState(false);

  const dataPersonas = [
    { value: "Sólo yo" },
    { value: "2-10" },
    { value: "11-25" },
    { value: "26-50" },
    { value: "51-100" },
    { value: "500+" },
  ];

  const dataColor = [
    { value: "#39b0ff" },
    { value: "#04b58b" },
    { value: "#3e9c4b" },
    { value: "#b6bc00" },
    { value: "#e59100" },
    { value: "#e55c00" },
    { value: "#ee1f50" },
    { value: "#d6198a" },
    { value: "#b321f1" },
  ];

  const dataPrivacidad = [
    {
      value: "Privado",
      explicacion:
        "El contenido será visible sólo para ti y los miembros de tu Organización.",
    },
    {
      value: "Público",
      explicacion:
        "Cualquiera con el vínculo podrá ver la actividad de tu Organización.",
    },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onClickColorOpen = () => {
    setColorState(true);
  };

  const onClickColorClose = () => {
    setColorState(false);
  };

  const onClikButton = () => {
    alert(
      "Nombre del Espacio de Trabajo: " +
        props.nombreEspacio +
        "\n" +
        "Dominio del Espacio de Trabajo: " +
        props.urlEspacio +
        "\n" +
        "Personas que trabajarán en el Espacio de Trabajo: " +
        props.personas +
        "\n" +
        "Color del Espacio de Trabajo: " +
        props.color +
        "\n" +
        "Privacidad del Espacio de Trabajo: " +
        props.privacidad +
        "\n" +
        "Logotipo del Espacio de Trabajo: " +
        props.avatar
    );
  };

  const onDiscardButton = () => {
    props.setAvatar("");
    props.setNombreEspacio("");
    props.setURLEspacio("");
    props.setPersonas("");
    props.setColor("#48b5fe");
    props.setPrivacidad("");
  };

  return (
    <>
      <Form
        name="basic"
        className="Config__form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Text className="Config__encabezado">Configuración</Text>
        <div className="Config__upload">
          <Form.Item>
            <Text className="Config__label">Logo del espacio</Text>
            <GetAvatar
              avatar={props.avatar}
              updateAvatar={props.updateAvatar}
            />
          </Form.Item>
        </div>
        <div className="Config__form__item">
          <Text className="Config__label">Nombre del espacio</Text>
          <Form.Item
            rules={[
              {
                required: true,
                message:
                  "Por favor, introduzca el nombre de su espacio de trabajo",
              },
            ]}
          >
            <Input
              className="Config__input"
              placeholder="Ep: Mi espacio de trabajo"
              onChange={props.handleChangeNombreEspacio}
              value={props.nombreEspacio}
            />
          </Form.Item>
        </div>
        <div className="Config__form__item__explanation">
          <Text className="Config__label">URL del espacio (dirección web)</Text>
          <Form.Item
            rules={[
              {
                required: true,
                message:
                  "Por favor, introduzca la dirección web de su espacio de trabajo",
              },
            ]}
          >
            <Input
              className="Config__input"
              placeholder="Ep: mi.dominio.dofleini.com"
              onChange={props.handleChangeURLEspacio}
              value={props.urlEspacio}
            />
          </Form.Item>
          <Row>
            <Col span={1}>
              <ExclamationCircleOutlined className="Config__image" />
            </Col>
            <Col span={23} className="Config__help">
              <Text className="Config__text__help">
                Puedes cambiar la URL de tu espacio (dirección web) en cualquier
                momento, pero por cortesía hacia tus compañeros de trabajo y
                otros usuarios de Plankton, por favor no lo hagas muy seguido :)
              </Text>
              <Text className="Config__text__help">
                Nota: Si cambias la URL de tu espacio, Plankton automáticamente
                redireccionará desde la antigua dirección hacia la nueva. En
                cualquier caso, deberías asegurarte que tus compañeros sepan
                aceca del cambio porque la dirección anterior pasará a estar
                libre y puede ser usada por otro espacio en el futuro.
              </Text>
            </Col>
          </Row>
        </div>
        <div className="Config__personas">
          <Text className="Config__label">
            ¿Cuántas personas trabajarán contigo, incluyéndote a ti?
          </Text>
          <Space size="small" className="Config__button__group">
            {dataPersonas.map((persona) => {
              return (
                <Button
                  name={persona.value}
                  className="Config__personas__button"
                  type="button"
                  value={persona.value}
                  onClick={props.handleSelectPersonas}
                >
                  {persona.value}
                </Button>
              );
            })}
          </Space>
          <Row>
            <Col span={1}>
              <ExclamationCircleOutlined className="Config__image" />
            </Col>
            <Col span={23}>
              <Text className="Config__text__help">
                Este logo identificará tu espacio entre el resto.
              </Text>
              <Text className="Config__text__help">
                Preferiblemente sube una imagen .png igual o superior a 65px a
                72ppp con fondo transparente.
              </Text>
            </Col>
          </Row>
        </div>
        <div className="Config__color">
          <Text className="Config__label">Color del tema</Text>
          <Space size="middle" className="Config__button__group">
            {dataColor.map((color) => {
              return (
                <Button
                  name={color.value}
                  className="Config__color__button"
                  type="button"
                  value={color.value}
                  onClick={props.handleSelectColor}
                  style={{ background: color.value }}
                >
                  &nbsp;
                </Button>
              );
            })}
            <Button
              onClick={onClickColorOpen}
              className="Config__color__button__0"
              type="button"
            >
              <Button
                className="Config__color__button__0__0"
                type="button"
                style={{ background: props.color }}
              >
                &nbsp;
              </Button>
            </Button>
          </Space>
          {colorState ? (
            <>
              <CompactPicker onChange={props.handleChangeColor} />
              <Button
                className="Config__form__button__picker"
                onClick={onClickColorClose}
                type="button"
              >
                Seleccionar Color
              </Button>
            </>
          ) : null}
        </div>
        <div className="Config__privacidad">
          <Text className="Config__label">Privacidad del espacio</Text>
          <Radio.Group>
            <Space size="small" className="Config__button__group">
              {dataPrivacidad.map((privacidad) => {
                return (
                  <Row className="Config__privacidad__button">
                    <Col span={1}>
                      <Text>&nbsp;</Text>
                    </Col>
                    <Col span={23}>
                      <Radio
                        value={privacidad.value}
                        onChange={props.handleChangePrivacidad}
                      >
                        <Text className="Config__privacidad__button__text">
                          {privacidad.value}
                        </Text>
                        <Text className="Config__text__button__help">
                          {privacidad.explicacion}
                        </Text>
                      </Radio>
                    </Col>
                  </Row>
                );
              })}
            </Space>
          </Radio.Group>
        </div>
        <div className="Config__form__button">
          <Space size="small">
            <Form.Item>
              <Button
                onClick={onClikButton}
                className="Config__form__button__save"
                htmlType="submit"
              >
                Guardar cambios
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                onClick={onDiscardButton}
                className="Config__form__button__discard"
              >
                Descartar
              </Button>
            </Form.Item>
          </Space>
        </div>
      </Form>
    </>
  );
}

ConfigComponent.propTypes = {
  avatar: PropTypes.string.isRequired,
  setAvatar: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  nombreEspacio: PropTypes.string.isRequired,
  setNombreEspacio: PropTypes.func.isRequired,
  handleChangeNombreEspacio: PropTypes.func.isRequired,
  urlEspacio: PropTypes.string.isRequired,
  setURLEspacio: PropTypes.func.isRequired,
  handleChangeURLEspacio: PropTypes.func.isRequired,
  personas: PropTypes.string.isRequired,
  setPersonas: PropTypes.func.isRequired,
  handleSelectPersonas: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  handleSelectColor: PropTypes.func.isRequired,
  handleChangeColor: PropTypes.func.isRequired,
  privacidad: PropTypes.string.isRequired,
  setPrivacidad: PropTypes.func.isRequired,
  handleChangePrivacidad: PropTypes.func.isRequired,
};

export default ConfigComponent;
