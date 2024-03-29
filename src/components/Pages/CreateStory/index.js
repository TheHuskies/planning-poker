import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Modal, Popconfirm, Table, Tooltip } from "antd";
import { Container, StyledIcon } from "./CreateStory.styled";
import TextArea from "antd/lib/input/TextArea";
import Delete from "../../../assets/icons/delete.svg";
import Play from "../../../assets/icons/play.svg";
import { Link } from "react-router-dom";
import { useRoom } from "../../Context/RoomContext";
import { StoryProvider, useStory } from "../../Context/StoryContext";
import CreateStories from "../../../services/CreateStory";
import ListStories from "../../../services/ListStories";
import DeleteStory from "../../../services/DeleteStory";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr key={props.index} {...props} />
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
  const getRoom = localStorage.getItem("room");
  const getItemRoom = JSON.parse(getRoom);

  const handleDelete = (id) => {
    try {
      DeleteStory(id).then((newData) => {
        newData = dataSource.filter((item) => item.id !== id);
        setDataSource(newData);
      });
    } catch (error) {
      console.error("Erro ao excluir story");
    }
  };

  const defaultColumns = [
    {
      title: "Nome",
      dataIndex: "title",
      width: "30%",
      editable: true,
    },
    {
      title: "Descrição",
      dataIndex: "description",
      editable: true,
    },
    {
      title: "Ações",
      dataIndex: "actions",
      className: "actions-column",
      render: (_, record) => (
        <>
          <Popconfirm
            title="Tem certeza que deseja excluir?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Tooltip placement="bottom" title={"Excluir"}>
              <StyledIcon style={{ marginRight: 50 }}>
                <img src={Delete} alt="Excluir" />
              </StyledIcon>
            </Tooltip>
          </Popconfirm>
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

  const storedData = localStorage.getItem("storyData");

  useEffect(() => {
    ListStories(room.id)
      .then((request) => {
        const data = request.data;
        setDataSource(data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });

    if (storedData) {
      setDataSource(JSON.parse(storedData));
    }
  }, [room.id, storedData]);

  const handleAdd = () => {
    const newData = {
      key: storedData ? storedData.key : null,
      name: story,
      description: description,
    };
    const roomId = getItemRoom ? getItemRoom.id : null;
    const storyData = {
      title: story,
      description: description,
      roomId: roomId,
    };

    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    CreateStories(storyData)
      .then((response) => {
        localStorage.setItem(
          "storyData",
          JSON.stringify([...dataSource, newData])
        );
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
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
    localStorage.setItem("storyData", JSON.stringify(newData));
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (col.dataIndex === "title" || col.dataIndex === "description") {
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
            {record[col.dataIndex]}
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
                required
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
