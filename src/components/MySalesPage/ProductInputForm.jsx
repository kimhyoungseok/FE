// import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const ProductInputForm = ({
  product,
  handleChange,
  handleSubmit,
  handleCancel,
}) => {
  const dummyCategories = ["카테고리1", "카테고리2","카테고리3"];// 임시 나중에 지울거임 
  // const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Axios를 사용하여 카테고리 데이터를 가져옵니다.
//     const fetchCategories = async () => {
//         try {
//             let response = await axios.get('YOUR_API_ENDPOINT'); // 실제 API endpoint로 변경해주세요.
//             setCategories(response.data.categories); // API 응답의 구조에 따라 변경해야 할 수 있습니다.
//         } catch (error) {
//             console.error("Failed fetching categories:", error);
//         }
//     };

//     fetchCategories();
// }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // 모든 필드가 채워졌는지 확인

    if (
      product.product_name.trim() === '' ||
      product.category_name.trim() === '' ||
      product.product_price.trim() === '' ||
      product.stock_quantity.trim() === '' ||
      product.stock_size.trim() === '' ||
      product.stock_color.trim() === ''
    ) {
      alert('작성되지 않은 텍스트가 있습니다');
    } else {
      const newProduct = {
        ...product,
      };

      handleSubmit(newProduct);
    }
  };


  return (
    <InputForm onSubmit={handleFormSubmit}>
      <InputTitle>
        <h2>노출상품명</h2>
        <Input
          name="product_name"
          value={product.product_name}
          onChange={handleChange}
          placeholder="물품 이름"
        />
      </InputTitle>

      <InputTitle>
        <h2>상품가격</h2>
        <Input
          name="product_price"
          value={product.product_price}
          onChange={handleChange}
          placeholder="가격"
        />
      </InputTitle>

      <InputTitle>
      <h2>카테고리</h2>
                <select 
                    name="category_name" 
                    value={product.category_name} 
                    onChange={handleChange}
                >
                    <option value="">-- 카테고리 선택 --</option>
                    {dummyCategories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                    </select>
      </InputTitle>

      <InputTitle>
        <h2>상품수량</h2>
        <Input
          name="stock_quantity"
          value={product.stock_quantity}
          onChange={handleChange}
          placeholder="수량"
        />
      </InputTitle>

      <InputTitle>
        <h2>상품시리즈</h2>
        <Input
          name="stock_size"
          value={product.stock_size}
          onChange={handleChange}
          placeholder="사이즈"
        />
      </InputTitle>

      <InputTitle>
        <h2>상품색상</h2>
        <Input
          name="stock_color"
          value={product.stock_color}
          onChange={handleChange}
          placeholder="색상"
        />
      </InputTitle>

      <Button type="button" onClick={handleCancel}>
        취소하기
      </Button>
      <Button type="button" onClick={handleFormSubmit}>등록하기</Button>
    </InputForm>
  );
};

export default ProductInputForm;

//styled component
const InputForm = styled.form`
  width: 25%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px;
`;

const Input = styled.input`
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid black;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
`;
