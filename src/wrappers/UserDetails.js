import { DatePicker, Form, Input, Select, Button, Radio } from "antd";
import React, { useState } from "react";
import "../App.css";
import Wrapper from "../component/middleAlignWrapper";
import { useHistory } from "react-router-dom";

const UserDetails = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const history = useHistory();
  const submitDetails = async (data) => {
    console.log(data);
    try {
      const endpoint = "http://localhost:8080/userd/add";

      const body = JSON.stringify({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        mobile: data.mobile,
        status: data.status,
        password: data.password,
        accountType: data.accountType,
      });

      console.log(body, "data");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      // if (response.status === 200) {
      //   history.push("/user-list");
      // }
    } catch (error) {
      console.log(error);
    }
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
        onFinish={submitDetails}
      >
        <div style={{ textAlign: "center" }}>
          <h1>User Information</h1>
        </div>
        <Form.Item label="ID" name={"id"}>
          <Input />
        </Form.Item>
        <Form.Item label="First Name" name={"firstName"}>
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name={"lastName"}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name={"email"}>
          <Input />
        </Form.Item>
        <Form.Item label="DateOfBirth" name={"dateOfBirth"}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Mobile Number" name={"mobile"}>
          <Input />
        </Form.Item>
        <Form.Item label="Status" name={"status"}>
          <Radio.Group>
            <Radio value="changed"> Changed </Radio>
            <Radio value="not changed">Not Change</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Password" name={"password"}>
          <Input />
        </Form.Item>
        <Form.Item label="User Type" name={"accountType"}>
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
