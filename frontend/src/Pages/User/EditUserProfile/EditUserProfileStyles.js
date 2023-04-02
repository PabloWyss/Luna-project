import React, { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  width: 50%;
  left: 362px;
  margin-top: 150px;
  margin-left: 300px;
  background-color: Brown;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  width: 80%;
  margin: auto;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  height: 30px;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const TextArea = styled.textarea`
  height: 80px;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  background-color: mediumpurple;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;