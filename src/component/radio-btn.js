import React from "react";

const Radio = () => {
  return (
    // <div>
    <div className="radio-btn">
      <div className="form_group">
        <div className="form_radio-group">
          <input
            className="form_radio-input"
            type="radio"
            name="sample"
            value=""
            id="red"
          />
          <label for="red" className="form_radio-label">
            <span className="form_radio-button form_radio-button_red"> </span>{" "}
            Red{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="form_group">
        <div className="form_radio-group">
          <input
            className="form_radio-input"
            type="radio"
            name="sample"
            value=""
            id="orange"
          />
          <label for="orange" className="form_radio-label">
            <span className="form_radio-button form_radio-button_orange">
              {" "}
            </span>{" "}
            Orange{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
      {/* <div className="form_group">
                                            <div className="form_radio-group">
                                              <input
                                                className="form_radio-input"
                                                type="radio"
                                                name="sample"
                                                value=""
                                                id="green"
                                              />
                                              <label for="green" className="form_radio-label">
                                                <span className="form_radio-button form_radio-button_green"> </span>{" "}
                                                Green{" "}
                                              </label>{" "}
                                            </div>{" "}
                                          </div>{" "} */}{" "}
    </div>
  );
};
export default Radio;
