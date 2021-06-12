/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './ProfileInfoForm.scss'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Radio, Select, DatePicker } from 'antd'
import { useState } from 'react'
const { Option } = Select

Profile.propTypes = {}

function Profile(props) {
    const [form] = Form.useForm()

    const onFinish = async (values) => {
        console.log(values)
    }

    return (
        <Form labelCol={{ span: 4 }} size="large" form={form} initialValues={{}} onFinish={onFinish}>
            <Form.Item label="Fullname">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Email">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select placeholder="Select a option and change input text above" allowClear>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>

            <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="day"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(33.33% - 8px)' }}
                >
                    <Input placeholder="Input birth year" />
                </Form.Item>

                <Form.Item
                    name="month"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(33.33% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="Select a option and change input text above" defaultValue="1">
                        <Option value="1">Tháng 1</Option>
                        <Option value="2">Tháng 2</Option>
                        <Option value="3">Tháng 3</Option>
                        <Option value="4">Tháng 4</Option>
                        <Option value="5">Tháng 5</Option>
                        <Option value="6">Tháng 6</Option>
                        <Option value="7">Tháng 7</Option>
                        <Option value="8">Tháng 8</Option>
                        <Option value="9">Tháng 9</Option>
                        <Option value="10">Tháng 10</Option>
                        <Option value="11">Tháng 11</Option>
                        <Option value="12">Tháng 12</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="year"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(33.33%)' }}
                >
                    <Input placeholder="Input birth month" />
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '190px' }}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Profile
