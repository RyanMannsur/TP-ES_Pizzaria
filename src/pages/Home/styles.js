import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  height: 260vh;
`;

export const Label = styled.label`
  font-size: 40px;
  font-weight: 600;
  color: #676767;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.section`
  font-size: 20px;
  color: #676767;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Adiciona duas colunas com largura igual */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const MenuList2 = styled.ul`
  list-style: none;
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border: 1px solid #0003;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-left: 10px; 
  margin-right: 10px; 
`;



export const MenuItemTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #676767;
`;

export const MenuItemDescription = styled.p`
  font-size: 14px;
  color: #676767;
`;

export const MenuItemPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Select = styled.select`
  outline: none;
  padding: 10px 10px;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  background-color: #f0f2f5;
  border: none;
`;

export const labelQuantidade = styled.label`
  font-size: 14px;
  color: blue;
`;