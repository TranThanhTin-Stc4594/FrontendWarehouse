import React, { useState } from 'react';
import './App.css';

const backendUrl = 'https://back-end-warehouse.vercel.app/';

function App() {
  const [keyword, setKeyword] = useState('');
  const [parameter, setParameter] = useState('');
  const [file, setFile] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState('');

  const handleSearch = async () => {
    const url = `${backendUrl}/api/search?keyword=${keyword}&parameter=${parameter}`;
    console.log(`Fetching from: ${url}`);
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSearchResults(data.filteredData || []);
      console.log('Search results:', data.filteredData);
    } else {
      console.error('Error fetching search results:', response.statusText);
      alert('Không thể tìm kiếm. Vui lòng thử lại sau.');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${backendUrl}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Không thể tải tệp lên. Vui lòng thử lại sau.');
    }
  };

  const handleUpdateQuantity = async () => {
    if (!selectedProduct || !quantity) {
      alert('Please select a product and enter a quantity.');
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/update-quantity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ maSanPham: selectedProduct, quantity: parseInt(quantity, 10) }),
      });

      if (response.ok) {
        alert('Quantity updated successfully.');
        handleSearch();  // Re-fetch the search results to reflect the updated quantity
      } else {
        console.error('Error updating quantity:', response.statusText);
        alert('Không thể cập nhật số lượng. Vui lòng thử lại sau.');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
      alert('Không thể cập nhật số lượng. Vui lòng thử lại sau.');
    }
  };

  const fetchSuggestions = async (keyword) => {
    const url = `${backendUrl}/api/suggestions?keyword=${keyword}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSuggestions(data.suggestions || []);
    } else {
      console.error('Error fetching suggestions:', response.statusText);
    }
  };

  const handleKeywordChange = (e) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    fetchSuggestions(newKeyword);
  };

  return (
    <div className="App">
      <h1>Quản lý Kho</h1>
      <div>
        <label>
          Keyword:
          <input type="text" value={keyword} onChange={handleKeywordChange} />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => setKeyword(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </label>
        <label>
          Parameter:
          <input type="text" value={parameter} onChange={(e) => setParameter(e.target.value)} />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <label>
          Upload Excel file:
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="results">
        <h2>Kết quả Tìm kiếm</h2>
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map(result => (
              <li
                key={result['Mã sản phẩm ']}
                className={selectedProduct === result['Mã sản phẩm '] ? 'selected' : ''}
                onClick={() => setSelectedProduct(result['Mã sản phẩm '])}
              >
                <p><strong>Tên sản phẩm:</strong> {result['Tên sản phẩm']}</p>
                <p><strong>Mã sản phẩm:</strong> {result['Mã sản phẩm ']}</p>
                <p><strong>Thông số sản phẩm:</strong> {result['Thông số sản phẩm']}</p>
                <p><strong>Vị trí:</strong> {result['Vị trí']}</p>
                <p><strong>Số lượng sản phẩm:</strong> {result['Số lượng sản phẩm']}</p>
              </li>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </ul>
      </div>
      {selectedProduct && (
        <div className="update-quantity">
          <h2>Update Quantity for {selectedProduct}</h2>
          <input
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button onClick={handleUpdateQuantity}>Update Quantity</button>
        </div>
      )}
    </div>
  );
}

export default App;