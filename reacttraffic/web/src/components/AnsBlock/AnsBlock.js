import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Collapse, Form, Input, Button, Radio } from 'antd';
import history from "../../utils/history";
import "./AnsBlock.scss"

const { TextArea } = Input;
const AnsBlock = (props) => {
  const { data, type } = props;
  const [AnsForm] = Form.useForm();

  let output
  if (type === 1) {
    output = (
      <Collapse
        items={[{
          label: "學生回答",
          children:
            <div>
              <Radio.Group className="radioGroup" value={_.get(data, "firstAnswerStrength") === undefined ? _.get(data, "strength") : _.get(data, "firstAnswerStrength")}>
                <Radio value={"0"}>強</Radio>
                <Radio value={"1"}>弱</Radio>
              </Radio.Group>
              <TextArea
                disabled
                rows={4}
                style={{ marginTop: "10px", color: "black" }}
                value={_.get(data, "firstAnswerReasoning") === undefined ? _.get(data, "text") : _.get(data, "firstAnswerReasoning")}
              />
            </div>,
        }]}
      />
    )
  } else if (type === 2) {
    output = (
      <Collapse
        items={[{
          label: "學生討論筆記",
          children:
            <div>
              <TextArea
                disabled
                rows={4}
                style={{ marginTop: "10px", color: "black" }}
                value={_.get(data, "additionalNotes") === undefined ? _.get(data, "text") : _.get(data, "additionalNotes")}
              />
            </div>,
        }]}
      />
    )
  } else if (type === 3) {
    output = (
      <Collapse
        items={[{
          label: "學生反思",
          children:
            <div>
              <TextArea
                disabled
                rows={4}
                style={{ marginTop: "10px", color: "black" }}
                value={_.get(data, "reflection") === undefined ? _.get(data, "text") : _.get(data, "reflection")}
              />
            </div>,
        }]}
      />
    )
  } else if (type === 4) {
    output = (
      <Collapse
        items={[{
          label: "學生回答",
          children:
            <div>
              <Radio.Group className="radioGroup" value={_.get(data, "secondAnswerStrength") === undefined ? _.get(data, "strength") : _.get(data, "secondAnswerStrength")}>
                <Radio value={"0"}>強</Radio>
                <Radio value={"1"}>弱</Radio>
              </Radio.Group>
              <TextArea
                disabled
                rows={4}
                style={{ marginTop: "10px", color: "black" }}
                value={_.get(data, "secondAnswerReasoning") === undefined ? _.get(data, "text") : _.get(data, "secondAnswerReasoning")}
              />
            </div>,
        }]}
      />
    )
  }

  return (
    <div className="layout">
      <div className="AnsBlock" >
        {output}
      </div>
    </div>
  );
};


export default AnsBlock;
