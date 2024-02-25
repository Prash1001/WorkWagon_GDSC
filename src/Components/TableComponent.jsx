import React, { useState, useRef } from 'react';
import Data from './data.json';
import './TableComponent.css';

function TableComponent() {
  const [data, setData] = useState(Data);

  function handleDelete(id) {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  return (
    <div className='tableWrap'>
      <div>
        <AddMember setData={setData} data={data} />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>UIN</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((current) => (
              <tr key={current.id}>
                <td>{current.name}</td>
                <td>{current.UIN}</td>
                <td>{current.phone}</td>
                <td>
                  <button id="button2" onClick={() => handleDelete(current.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AddMember({ setData, data }) {
  const nameRef = useRef();
  const UINRef = useRef();
  const phoneRef = useRef();

  function handleValues(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const UIN = event.target.elements.UIN.value;
    const phone = event.target.elements.phone.value;

    const newMember = {
      id: data.length + 1, // Assign a unique ID (replace this logic as needed)
      name,
      UIN,
      phone,
    };

    setData((prevData) => [...prevData, newMember]);

    nameRef.current.value = '';
    UINRef.current.value = '';
    phoneRef.current.value = '';
  }

  return (
    <form className='addForm' onSubmit={handleValues}>
      <input type="text" name="name" placeholder='Enter Name' ref={nameRef} />
      <input type="number" name="UIN" placeholder='Enter UIN' ref={UINRef} />
      <input type="text" name="phone" placeholder='Enter Phone' ref={phoneRef} />
      <button type="submit" id="button2">
        Add
      </button>
    </form>
  );
}

export default TableComponent;
