import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
const { TextArea } = Input;

const Notes = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const history = useHistory();
  const submitNote = async (data) => {
    try {
      const endpoint = "http://localhost:8080/add";

      const body = JSON.stringify({
        title: data.title,
        description: data.description,
      });

      console.log(body);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      if (response.status === 200) {
        history.push("/note-details");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onFinish={submitNote}
    >
      <div className="form">
        <h1>Add A Note</h1>
      </div>
      <Form.Item label="Title" name={"title"}>
        <Input />
      </Form.Item>

      <Form.Item label="Description" name={"description"}>
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Notes;
