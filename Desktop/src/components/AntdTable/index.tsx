import { Table } from "antd";
import { AntdTableColumns } from "./AntdTableColumns";
import './AntdTableStyles.css'

const AntdTable = (props: { data: any[]}) => {
  return (
      <>
        <div className="antd-table">
        <Table dataSource={props.data} columns={AntdTableColumns} pagination={false} sticky/>
        </div>
      </>
  );
};

export default AntdTable;
