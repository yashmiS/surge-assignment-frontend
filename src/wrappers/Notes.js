import React, { useState } from "react";
import { Form, Input, Button } from "antd";

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
      <div className="form">
        <h1>Add A Note</h1>
      </div>
      <Form.Item label="Title">
        <Input />
      </Form.Item>

      <Form.Item label="Description">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="save">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Notes;
