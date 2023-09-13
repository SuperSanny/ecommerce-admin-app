import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "SNo.",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Bloglist = () => {
  return (
    <>
      <h3 className="mb-4 title">Blog List</h3>
      <div className="flex-grow-1 bg-white p-3 rounded-1">
        <Table columns={columns} dataSource={data1} />
      </div>
    </>
  );
};

export default Bloglist;
