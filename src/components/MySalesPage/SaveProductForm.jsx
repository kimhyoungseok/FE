import styled from 'styled-components';
import React from 'react';


const SaveProductForm = ({ products }) => {

  React.useEffect(() => {
    console.log("Saved products:", products);
    }, [products]);

    return (
      <SaveProductContainer>
        {products && products.map((product, index) => (
          <DisplayDiv key={index}>
            <div>노출상품명: {product.product_name}</div>
            <div>상품가격: {product.product_price}</div>
            <div>카테고리: {product.category_name}</div>
            {product.stock_option && product.stock_option.map((option, idx) => (
              <React.Fragment key={idx}>
                <div>상품수량: {option.stock_quantity}</div>
                <div>상품시리즈: {option.stock_size}</div>
                <div>상품색상: {option.stock_color}</div>
              </React.Fragment>
            ))}
          </DisplayDiv>
        ))}
        <Button type="submit">최종등록</Button>
      </SaveProductContainer>
    );
  };
  
  export default SaveProductForm;

const DisplayDiv = styled.div`
    border: 1px solid green; 
    margin-bottom: 5;
`;


const SaveProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid blue;
    width: 50%;

    
`;

const Button = styled.button`
    width: 100%;
    padding: 10px 15px;
    border: 1px solid black;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    align-self: flex-end;  
    margin-top: auto;     // 이 속성도 추가해서 버튼을 컨테이너의 나머지 공간에서 아래로 밀어냅니다.
`;