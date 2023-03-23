import { useState, useEffect } from 'react';

import './App.scss';
import Data from './db.json';

function App() {
  const [title, setTitle] = useState();
  const [data, setData] = useState(Data.surcharge);
  const [unit, setUnit] = useState();
  const [value, setValue] = useState();
  const [index, setIndex] = useState(4);

  const handleAddSurcharge = () => {
    if(!title || !unit || !value) {
      alert("Vui lòng nhập đầy đủ thông tin")
    } else {
      setIndex(index + 1)
      setData([...data, {
        id: index,
        title: title,
        type: unit,
        value: value
      }])
      console.log(data)
      setTitle("");
      setUnit("");
      setValue("");
    };
  }
  const handleDelete = (dataDelete) => {

    let newData = [...data]
    newData = newData.filter(x => x.id !== dataDelete.id)
    // newData.splice(id, 1)
    console.log(newData)
    setData(newData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='add-surcharges'>
          <from>
            <h5>Tên phụ phí:</h5>
            <input type="text" className="" placeholder='text' value={title || ''}
            onChange={e => setTitle(e.target.value)}
            />
            <select onChange={e => setUnit(e.target.value)} value={unit}> 
            <option  value="none">...</option>
              <option  value="VND">Thành tiền</option>
              <option value="%">Tỉ lệ</option>
            </select>
          </from>
          <input onChange={e => setValue(e.target.value)} value={value || ''} className={unit === 'VND' ? "input-money display-block" : "input-money"} type="text" placeholder='Đơn vị VNĐ'/>
          <select onChange={e => setValue(e.target.value)} className={unit === '%' ? "select-percent display-block" : "select-percent"}>
            <option value="pp1">pp1</option>
            <option value="pp2">pp2</option>
            <option value="pp3">pp3</option>
          </select>
          
          <button onClick={handleAddSurcharge}>Thêm</button>
        </div>
        <div className="header">
            <div className="surcharges-header">
              {/* <h1>Phụ phí</h1>
              <h1>Thành tiền</h1>
              <h1>X</h1> */}
            </div>
            <div className="surcharges-list">
              {data.map((data, id) => (
                <div key={id} className="surcharges">
                  <h3>{data.title}</h3>
                  <h3>{data.value} {data.type}</h3>
                  <h5 onClick={() => handleDelete(data)}>Xoá</h5>
                </div>
              ))}
            </div>
        </div>

      </header>
    </div>
  );
}

export default App;
