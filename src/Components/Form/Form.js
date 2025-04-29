import React, { useState } from 'react';

export default function Form() {

const [inputs, setInputs] = useState({
    diemToan: 0,
    diemLy: 0
  });
  const [result, setResult] = useState({
    diemTrungBinh: 0,
    xepLoai: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = parseFloat(event.target.value) || 0;
    setInputs(values => ({...values, [name]: value}));
  }

  const calculateGrade = (diemTrungBinh) => {
    let result = "";
    if (diemTrungBinh > 9) {
        result = "Xuất sắc";
    } else if (diemTrungBinh > 8) {
        result = "Giỏi";
    } else if (diemTrungBinh > 7) {
        result = "Khá";
    } else if (diemTrungBinh > 5) {
        result = "Trung bình";
    } else {
        result = "Yếu";
    }
    return result;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const diemToan = parseFloat(inputs.diemToan) || 0; // Chuyển đổi sang số
    const diemLy = parseFloat(inputs.diemLy) || 0; // Chuyển đổi sang số
    
    const diemTrungBinh = (diemToan + diemLy) / 2;
    const xepLoai = calculateGrade(diemTrungBinh);
    
    setResult({
      diemTrungBinh: diemTrungBinh.toFixed(2), // Làm tròn 2 chữ số thập phân
      xepLoai: xepLoai
    });
  }

  return (
    <div>
      <h2>Tính điểm trung bình</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Điểm Toán:
            <input 
              type="number" 
              name="diemToan"
              value={inputs.diemToan}   
              onChange={handleChange}
            />
          </label>
        </div>
        
        <div>
          <label>
            Điểm Lý:
            <input 
              type="number" 
              name="diemLy"
              value={inputs.diemLy}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">OK</button>
      </form>
        <div>
          <h3>Kết quả:</h3>
          <p>Điểm trung bình: {result.diemTrungBinh}</p>
          <p>Xếp loại: {result.xepLoai}</p>
        </div>
    </div>
  );
}
