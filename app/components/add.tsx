'use client'
import React, { useState } from "react";
import { BiMessageAltAdd, BiTrash } from "react-icons/bi"; // Importing delete (trash) icon
import Image from "next/image";

export default function Inputfield() {
  const [taskList, setTask] = useState(""); // State for input value
  const [item, setItem] = useState<string[]>([]); // State for the task list

  // Function to update taskList on input change
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value); // Updates input value
  };

  // Function to handle adding task to the list
  const itemEvent = () => {
    if (taskList.trim()) { // Only add if there's non-empty input
      setItem((oldItems) => [...oldItems, taskList]);
      setTask(""); // Clear input after adding task
    }
  };

  // Function to handle deleting an item from the list
  const deleteItem = (index: number) => {
    setItem((prevItems) => prevItems.filter((_, i) => i !== index)); // Removes the item at the specified index
  };

  return (
    <div className="bg-gradient-to-r from-lime-300 via-lime-500 to-transparent h-auto w-100% flex flex-col items-center justify-center rounded-2xl mt-8 border-gray-950 p-4 ">
      {/* Input field */}
      <input
        className="w-[70%] h-9 mb-4 p-2 border rounded-lg"
        type="text"
        placeholder="Add items"
        value={taskList} // Bound to taskList state
        onChange={handleClick} // Calls handleClick on input change
      />

      {/* Add button */}
      <button
        onClick={itemEvent} // Calls itemEvent on button click to add task
        className="flex items-center justify-center p-2 bg-blue-500 rounded-full hover:bg-blue-600 text-white mb-4"
      >
        <BiMessageAltAdd size={25} /> Add Task
      </button>

      {/* Ordered list of tasks */}
      <ol className="list-decimal pl-6 space-y-2 w-[70%]">
        {item.map((itemVal, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-gray-900 bg-gray-100 p-2 rounded-lg mb-2 shadow-md transition-all duration-300 hover:bg-gray-200 hover:transform hover:translate-y-1 hover:shadow-lg"
          >
            {/* Task text */}
            <span>{itemVal}</span>

            {/* Delete button */}
            <button
              onClick={() => deleteItem(index)} // Calls deleteItem with the index of the item
              className="ml-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              title="delete task"
            >
              <BiTrash size={20} />
            </button>
          </li>
        ))}
      </ol>
      <div>
        <Image className="mt-2"src={"/todo.png"} alt="car" width={100} height={100}/>
      </div>
    </div>

  );
}