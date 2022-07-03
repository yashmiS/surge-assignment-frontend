import { DatePicker, Form, Input, Select, Button, Radio } from "antd";
import React, { useState } from "react";
import "../App.css";

const UserDetails = () => {
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
      <Form.Item label="ID">
        <Input />
      </Form.Item>
      <Form.Item label="First Name">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name">
        <Input />
      </Form.Item>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="DateOfBirth">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Mobile Number">
        <Input />
      </Form.Item>
      <Form.Item label="Status">
        <Radio.Group>
          <Radio value="single"> Single </Radio>
          <Radio value="married"> Married </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Password">
        <Input />
      </Form.Item>
      <Form.Item label="User Type">
        <Select>
          <Select.Option value="student">admin</Select.Option>
          <Select.Option value="student">student</Select.Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserDetails;
