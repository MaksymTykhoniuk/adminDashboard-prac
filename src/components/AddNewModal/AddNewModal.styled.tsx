import styled from '@emotion/styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.724);
  backdrop-filter: blur(2px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  position: relative;
  padding: 40px;
  border-radius: 10px;
  background-color: #2a3447;
`;

export const CloseBtn = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 25px;
  height: 25px;
  cursor: pointer;

  transition: all 250ms linear;

  &:hover {
    scale: 0.9;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 40px;
  color: #ddd;
  font-size: 24px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 580px;
  justify-content: space-between;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  width: 40%;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px;
  background: transparent;
  color: #fff;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SubmitBtn = styled.button`
  padding: 10px 20px;
  width: 100%;
  background: transparent;
  font-weight: 500;
  color: #fff;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #2a3447;
    outline: none;
    border: 1px solid #2a3447;
    scale: 0.9;
  }
`;
