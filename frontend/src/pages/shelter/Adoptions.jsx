import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Adoptions = () => {
  const navigate = useNavigate();
  const [adoptionRequests, setAdoptionRequests] = useState([
    {
      id: 1,
      petName: "Bella",
      petBreed: "Golden Retriever",
      petAge: "3 years",
      applicantName: "John Doe",
      applicantEmail: "john.doe@example.com",
      status: "Pending",
    },
    {
      id: 2,
      petName: "Max",
      petBreed: "Labrador",
      petAge: "2 years",
      applicantName: "Jane Smith",
      applicantEmail: "jane.smith@example.com",
      status: "Pending",
    },
  ]);

  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState(""); // "accept" or "reject"

  // Handle adoption request status (Accept/Reject)
  const handleAdoptionStatus = (id, status) => {
    setAdoptionRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
    setShowModal(false); // Close the modal after action
  };

  // Handle contract button click
  const handleContract = (petId) => {
    console.log(`Proceeding to contract signing for pet ID: ${petId}`);
    navigate("/contract-sign?signer=shelter"); // Redirect to Contract Signing page for shelter
  };

  return (
    <AdoptionsContainer>
      <h1>Adoption Requests</h1>
      <p>Manage adoption requests for animals in the shelter.</p>

      {/* Adoption Requests List */}
      <AdoptionList>
        {adoptionRequests.map((request) => (
          <AdoptionCard key={request.id}>
            <h2>{request.petName}</h2>
            <p>
              <strong>Breed:</strong> {request.petBreed}
            </p>
            <p>
              <strong>Age:</strong> {request.petAge}
            </p>
            <p>
              <strong>Applicant Name:</strong> {request.applicantName}
            </p>
            <p>
              <strong>Applicant Email:</strong> {request.applicantEmail}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <StatusBadge status={request.status}>{request.status}</StatusBadge>
            </p>

            {/* Accept, Reject, and Contract Buttons */}
            <ButtonGroup>
              <AcceptButton
                onClick={() => openConfirmationModal(request.id, "accept")}
                disabled={request.status !== "Pending"}
              >
                Accept
              </AcceptButton>
              <RejectButton
                onClick={() => openConfirmationModal(request.id, "reject")}
                disabled={request.status !== "Pending"}
              >
                Reject
              </RejectButton>
              <ContractButton
                onClick={() => handleContract(request.id)}
                disabled={request.status !== "Accepted"}
              >
                Sign Contract
              </ContractButton>
            </ButtonGroup>
          </AdoptionCard>
        ))}
      </AdoptionList>
    </AdoptionsContainer>
  );
};

// Styled Components (same as before)
const AdoptionsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AdoptionList = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const AdoptionCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    color: #333;
  }

  p {
    margin: 0.5rem 0;
    color: #555;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: ${({ status }) =>
    status === "Accepted"
      ? "#d4edda"
      : status === "Rejected"
      ? "#f8d7da"
      : "#fff3cd"};
  color: ${({ status }) =>
    status === "Accepted"
      ? "#155724"
      : status === "Rejected"
      ? "#721c24"
      : "#856404"};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const AcceptButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const RejectButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #c82333;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ContractButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #3182ce;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Adoptions;