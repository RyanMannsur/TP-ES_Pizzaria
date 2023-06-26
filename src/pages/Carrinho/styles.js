import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
`;

export const Label2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const Item = styled.div`
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

export const ItemInfo = styled.div`
  // estilos do componente ItemInfo
`;

export const ItemName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #676767;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  color: #676767;
`;

export const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #676767;
`;