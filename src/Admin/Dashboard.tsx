import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Select, Input, Space } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined, EditOutlined, EyeInvisibleOutlined, DeleteOutlined } from '@ant-design/icons';
const { Paragraph } = Typography
import type { ColumnsType } from 'antd/es/table';
import { Option } from "antd/lib/mentions";
import { TypeProducts } from "../type/products";

type DashboardProps = {
    products: TypeProducts[],
    onRemove:(id:any) => void
}


// type data table
interface DataType {
    name: string;
    Price: number;
    description: string;
}


// table
const columns: ColumnsType<TypeProducts> = [
    {
        title: 'STT',
        dataIndex: 'id',
        key: 'stt',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Giá sản phẩm',
        dataIndex: 'price',
        key: 'Price',
    },
    {
        title: 'Mô tả',
        dataIndex: 'desc',
        key: 'desc',
    },
    {
        title: 'Ẩn/Hiện',
        key: 'hide',
        render: text => <a>{<EyeInvisibleOutlined style={{ fontSize: "18px" }} />}</a>
    },
    {
        title: 'Thao Tác',
        key: 'action',
        dataIndex: 'id',
        render: (_, record) => (
            <Space size="middle">
                <a className=" text-success" ><EditOutlined style={{ fontSize: "18px" }} /></a>
                <a className="mx-2 text-danger"><DeleteOutlined style={{ fontSize: "18px" }} /></a>
            </Space>
        ),

    },
];
// option category





const Dashboard = (props: DashboardProps) => {

    return (
        <>
            <Breadcrumb
                style={{
                    margin: '5px 0',
                }}
            >
                <h5>Điện Thoại</h5>
            </Breadcrumb>
            <div className='col-12 my-3 d-flex '>
                <div className="col-6 my-2">
                    <h6 className="text-start ">Danh Mục</h6>
                    <Select defaultValue="Iphone"  className='w-75 float-start text-start'>

                        <Option value="Iphone" >Iphone</Option>
                        <Option value="Samsung">Samsung</Option>
                        <Option value="Xiaomi">Xiaomi</Option>

                    </Select>
                </div>

                <div className="col-6">
                    <Link to='/admin/creat'><PlusOutlined className="border border-info border-3 rounded" style={{ float: 'right', margin: '0 100px', fontSize: '25px', color: '#00B0D7' }} /></Link>
                </div>

            </div>
            {/* <Table dataSource={props.products} columns={columns} /> */}

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Hide/Show</th>
                        <th scope="col" colSpan={2}>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row" >{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.desc}</td>
                            <td><a>{<EyeInvisibleOutlined style={{ fontSize: "18px" }} />}</a></td>
                            <td><Link to={`/admin/product/edit/${item.id}`} className=" text-success" ><EditOutlined style={{ fontSize: "18px" }} /></Link> </td>
                            <td><a className="text-danger" onClick={() => props.onRemove(item?.id)}><DeleteOutlined style={{ fontSize: "18px" }} /></a></td>
                        </tr>
                    })}


                </tbody>
            </table>
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default Dashboard