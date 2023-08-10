import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Modal, Popconfirm, Table, Tooltip } from "antd";
import { Container, StyledIcon } from "./CreateStory.styled";
import TextArea from "antd/lib/input/TextArea";
import Delete from "../../../assets/icons/delete.svg";
import Play from "../../../assets/icons/play.svg";
import { Link } from "react-router-dom";
import { useRoom } from "../../Context/RoomContext";
import { StoryProvider, useStory } from "../../Context/StoryContext";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

export const CreateStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { room } = useRoom();
  const { story, setStory } = useStory();
  const [dataSource, setDataSource] = useState([]);
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: "Nome",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "Descrição",
      dataIndex: "description",
    },
    {
      title: "Tipo de metodologia",
      dataIndex: "methodology",
    },
    {
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Tem certeza que deseja excluir?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Tooltip placement="bottom" title={"Excluir"}>
              <StyledIcon>
                <img src={Delete} alt="Excluir" />
              </StyledIcon>
            </Tooltip>
          </Popconfirm>
        ) : null,
    },
    {
      render: () => (
        <>
          <Tooltip placement="bottom" title={"Iniciar jogo"}>
            <Link to={`/room/${room.roomCode}`}>
              <StyledIcon>
                <img src={Play} alt="Play" />
              </StyledIcon>
            </Link>
          </Tooltip>
        </>
      ),
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      name: story,
      description: description,
      methodology: room.methodology,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (col.dataIndex === "name") {
      return {
        ...col,
        render: (_, record) => (
          <EditableCell
            editable={col.editable}
            dataIndex={col.dataIndex}
            title={col.title}
            record={record}
            handleSave={handleSave}
          >
            {record.name}
          </EditableCell>
        ),
      };
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const handleInputName = (event) => {
    setStory(event.target.value);
  };

  const handleInputDescription = (event) => {
    setDescription(event.target.value);
  };

  console.log("Teste", story);
  return (
    <StoryProvider>
      <Container>
        <Button
          onClick={() => setIsModalOpen(true)}
          type="primary"
          shape="round"
          size="large"
          className="btn-new-story"
        >
          Nova História
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          className="table"
        />
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={(null, null)}
        >
          <Form layout="vertical" form={form}>
            <Form.Item
              name="name"
              label="Nome da Story: "
              style={{ fontWeight: 500, marginTop: 20 }}
            >
              <Input
                placeholder="Nome da Story"
                name="name"
                value={story}
                onChange={handleInputName}
              />
            </Form.Item>
            <Form.Item
              label="Descrição: "
              name="description"
              style={{ fontWeight: 500 }}
            >
              <TextArea
                placeholder="Escreva aqui a descrição da Story"
                name="description"
                value={description}
                onChange={handleInputDescription}
                rows={4}
              />
            </Form.Item>
          </Form>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginLeft: "auto",
              width: 150,
            }}
          >
            <Button
              onClick={handleAdd}
              type="primary"
              shape="round"
              size="large"
              style={{ background: "#5151c4", border: "none", width: 90 }}
            >
              Salvar
            </Button>
          </div>
        </Modal>
      </Container>
    </StoryProvider>
  );
};
