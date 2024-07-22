
import React, { useState } from 'react';

const DataUpdate = () => {
  const [keyword, setKeyword] = useState('');
  const [newData, setNewData] = useState({});
  const [results, setResults] = useState([]);

  const updateData = async () => {
    const response = await fetch(`https://<YOUR_VERCEL_URL>/api/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer mysecrettoken'
      },
      body: JSON.stringify({ keyword, newData })
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Nhập mã sản phẩm"
      />
      <input
        type="text"
        name="newField"
        placeholder="Nhập dữ liệu mới"
        onChange={(e) => setNewData({ ...newData, [e.target.name]: e.target.value })}
      />
      <button onClick={updateData}>Cập nhật</button>

      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Mã sản phẩm</th>
              <th>Thông số sản phẩm</th>
              <th>Vị trí</th>
              <th>Số lượng sản phẩm</th>
              <th>Thời gian cập nhật</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => (
              <tr key={index}>
                <td>{item['Tên sản phẩm']}</td>
                <td>{item['Mã sản phẩm']}</td>
                <td>{item['Thông số sản phẩm']}</td>
                <td>{item['Vị trí']}</td>
                <td>{item['Số lượng sản phẩm']}</td>
                <td>{item['updatedAt']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataUpdate;
