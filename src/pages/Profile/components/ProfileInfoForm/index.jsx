/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './ProfileInfoForm.scss'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Radio, Select, DatePicker } from 'antd'
import { useState } from 'react'
import { MonochromePhotosTwoTone } from '@material-ui/icons'
const { Option } = Select

Profile.propTypes = {}

function Profile(props) {
    const [form] = Form.useForm()

    const onFinish = async (values) => {
        console.log(values)
    }
    const initialValues = {
        fullname: '',
        email: '',
        gender: 1,

        dayOfBirth: {
            day: 1,
            month: 1,
            year: 1999,
        },
    }

    return (
        <Form
            layout="vertical"
            initialValues={initialValues}
            labelCol={{ span: 4 }}
            size="large"
            form={form}
            onFinish={onFinish}
            requiredMark={false}
            validateTrigger="onBlur"
        >
            <Form.Item label="Fullname" name="fullname" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                <Select>
                    <Option value={1}>Nam</Option>
                    <Option value={2}>Nữ</Option>
                </Select>
            </Form.Item>

            <Form.Item name="dayOfBirth" label="BirthDate" rules={[{ required: true }]}>
                <Form.Item
                    name={['dayOfBirth', 'day']}
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(33.33% - 8px)' }}
                >
                    <Input placeholder="Ngày sinh" />
                </Form.Item>

                <Form.Item
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(33.33% - 8px)', margin: '0 8px' }}
                    name={['dayOfBirth', 'month']}
                >
                    <Select>
                        <Option value={1}>Tháng 1</Option>
                        <Option value={2}>Tháng 2</Option>
                        <Option value={3}>Tháng 3</Option>
                        <Option value={4}>Tháng 4</Option>
                        <Option value={5}>Tháng 5</Option>
                        <Option value={6}>Tháng 6</Option>
                        <Option value={7}>Tháng 7</Option>
                        <Option value={8}>Tháng 8</Option>
                        <Option value={9}>Tháng 9</Option>
                        <Option value={10}>Tháng 10</Option>
                        <Option value={11}>Tháng 11</Option>
                        <Option value={12}>Tháng 12</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={['dayOfBirth', 'year']}
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(33.33%)' }}
                >
                    <Input placeholder="Năm sinh" />
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Profile
