interface stringDataProps {
  [x: string]: string;
}

const sorter = (key: string) => {
  return (a: stringDataProps, b: stringDataProps) =>
    a[key].localeCompare(b[key]);
};

export const AntdTableColumns = () => [
  {
    title: "Attendee ID",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Name",
    dataIndex: "first_name",
    key: "first_name",
    sorter: sorter("first_name"),
  },
  {
    title: "Surname",
    dataIndex: "surname",
    key: "surname",
    sorter: sorter("surname"),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    filters: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    onFilter: (value: any, record: { gender: string }) =>
      record.gender.indexOf(value) === 0,
  },
];
