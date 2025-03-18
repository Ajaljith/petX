import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const ContractSign = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const signer = queryParams.get("signer"); // "adopter" or "shelter"

  const [signature, setSignature] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Contract signed by ${signer} with signature: ${signature}`);
    alert(`Contract signed successfully by ${signer}!`);
    navigate(signer === "adopter" ? "/adopter-adoptions" : "/shelter/adoptions");
  };

  return (
    <ContractSignWrapper>
      <h1>Contract Signing</h1>
      <p>You are signing the contract as the {signer}.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your signature:
          <input
            type="text"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Contract</button>
      </form>
    </ContractSignWrapper>
  );
};

// Styled Components (same as before)
const ContractSignWrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-size: 1rem;
      color: #666;
    }

    input {
      padding: 0.75rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      margin-top: 0.5rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      background-color: #4299e1;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #3182ce;
      }
    }
  }
`;

export default ContractSign;