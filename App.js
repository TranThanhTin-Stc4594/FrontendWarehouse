import React, { useState } from 'react';
import './App.css';

//const backendUrl = 'https://back-end-warehouse.vercel.app'
//const backendUrl =  'http://localhost:3333';
const backendUrl='http://192.168.50.58:3333';
function App() {
  const [keyword, setKeyword] = useState('');
  const [parameter, setParameter] = useState('');
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState('');

  const handleSearch = async () => {
    setSearchResults([]); // Clear previous search results
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
            const errorResponse = await response.json();
            console.error('Error updating quantity:', errorResponse);
            alert(`Không thể cập nhật số lượng: ${errorResponse.error}`);
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

  const handleSuggestionClick = (suggestion) => {
    setKeyword(suggestion); // Đặt từ khóa thành giá trị gợi ý
    setSuggestions([]); // Ẩn các gợi ý sau khi chọn
    handleSearch(); // Thực hiện tìm kiếm ngay lập tức
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <h1>Quản lý Kho</h1>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Keyword:
          <input type="text" value={keyword} onChange={handleKeywordChange} onKeyPress={handleKeyPress} />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </label>
        <label>
          Parameter:
          <input type="text" value={parameter} onChange={(e) => setParameter(e.target.value)} onKeyPress={handleKeyPress} />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        <h2>Kết quả Tìm kiếm</h2>
        <ul>
  {searchResults.length > 0 ? (
    searchResults.map(result => (
      <li
        key={result.ID}  // Sử dụng ID làm key
        className={selectedProduct === result.ID ? 'selected' : ''}  // Sử dụng ID để so sánh
        onClick={() => setSelectedProduct(result.ID)}  // Sử dụng ID để đặt selectedProduct
      >
        <p><strong>Tên sản phẩm:</strong> {result.TenSanPham}</p>
        <p><strong>Mã sản phẩm:</strong> {result.MaSanPham}</p>
        <p><strong>Thông số sản phẩm:</strong> {result.ThongSoSanPham}</p>
        <p><strong>Vị trí:</strong> {result.ViTri}</p>
        <p><strong>Số lượng sản phẩm:</strong> {result.SoLuongSanPham}</p>
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