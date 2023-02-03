"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "TODo 1", completed: false },
    { todoText: "TODO 2", completed: false },
    { todoText: "TODO 3", completed: false },
    { todoText: "TODO 4", completed: false },
  ]);
  const onClickHandler = (elm: any) => {
    console.log("elm: ", elm);
    const newTodos = todos.map((todo) => {
      if (todo.todoText == elm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  const deleteTodo = (elm: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == elm.todoText) return false;
      return true;
    });
    setTodos(newTodos);
  };
  return (
    <Box
      mt="-80px"
      width={"500px"}
      mx="auto"
      bg="#D3D3D3"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      overflow={"hidden"}
      borderRadius="12px"
    >
      <Flex direction={"column"}>
        <Box bg="#6e6e83" pl="100px" pt="60px" pb="60px">
          <input
            type="text"
            placeholder="Add your TODO"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <Button onClick={addTodo}>Add TODO</Button>
        </Box>
        <Box width={"400px"}>
          <Heading
            fontSize={"24px"}
            fontWeight="bold"
            pb="30px"
            pt="20px"
            pl="20px"
          >
            List of TODOs
          </Heading>
          {todos.map((elm) => {
            return (
              <li
                key={elm.todoText}
                style={{
                  color: elm.completed ? "blue" : "red",
                  fontSize: "18px",
                  paddingBottom: "15px",
                  listStyle: "none",
                  paddingLeft: "20px",
                }}
              >
                <input
                  type="checkbox"
                  checked={elm.completed}
                  onClick={() => {
                    onClickHandler(elm);
                  }}
                />
                {elm.todoText}
                <Button
                  bg={"#41414c"}
                  color={"#36eb09"}
                  ml="10px"
                  onClick={() => {
                    deleteTodo(elm);
                  }}
                >
                  Delete TODO
                </Button>
              </li>
              // </Text>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
}
