import React, { useState } from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

const Notes = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Input">
        <Input />
      </Form.Item>

      <Form.Item label="TextArea">
        <TextArea rows={4} />
      </Form.Item>
    </Form>
  );
};

export default Notes;
