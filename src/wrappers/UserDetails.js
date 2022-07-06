import { DatePicker, Form, Input, Select, Button, Radio } from "antd";
import React, { useState } from "react";
import "../App.css";
import Wrapper from "../component/middleAlignWrapper";

const UserDetails = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Wrapper>
      <Form
        style={{ width: "800px" }}
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
        <div style={{ textAlign: "center" }}>
          <h1>User Information</h1>
        </div>
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
            <Radio value="changed"> Changed </Radio>
            <Radio value="not changed">Not Change</Radio>
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

        <Form.Item style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default UserDetails;
