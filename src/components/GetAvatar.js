import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/defaultAvatar.png";
import "./styles/style.css";
import { Avatar, Button, Col, Image, Row, Typography } from "antd";
import UploadIcon from "../images/update.png";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function GetAvatar(props) {
  const Text = Typography;

  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;

  const click = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="Config__upload">
      <Avatar
        className="Config__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></Avatar>
      <label>
        <input
          type="file"
          ref={myFileField}
          onChange={uploadImage}
          id="fileInput"
          hidden
        />
      </label>
      <Button
        className="Config__upload__button"
        type="button"
        id="attachment"
        onClick={click}
      >
        <Image className="Config__image" src={UploadIcon} />
        &nbsp;Subir logo
      </Button>
      <Row>
        <Col span={1}>
          <ExclamationCircleOutlined className="Config__image" />
        </Col>
        <Col span={23}>
          <Text className="Config__text__help">
            Este logo identificará tu espacio entre el resto.
          </Text>
          <Text className="Config__text__help">
            Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp
            con fondo transparente.
          </Text>
        </Col>
      </Row>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
