import React from "react";
import styled from "styled-components";

const AddAnimal = () => {
  return (
    <AddAnimalContainer>
      <h1>Add New Animal</h1>

      {/* General Information Section */}
      <Section>
        <h2>General Information</h2>
        <FormGroup>
          <Label>Animal Name</Label>
          <Input type="text" placeholder="Enter animal name" />
        </FormGroup>
        <FormGroup>
          <Label>Animal Description</Label>
          <TextArea
            placeholder="Describe the animal (e.g., breed, color, personality, etc.)"
          />
        </FormGroup>
      </Section>

      {/* Animal Details Section */}
      <Section>
        <h2>Animal Details</h2>
        <FormGroup>
          <Label>Species</Label>
          <Select>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Other">Other</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Breed</Label>
          <Input type="text" placeholder="Enter breed (e.g., Golden Retriever)" />
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input type="number" placeholder="Enter age in years" />
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <Select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option>
          </Select>
        </FormGroup>
      </Section>

      {/* Health and Care Section */}
      <Section>
        <h2>Health and Care</h2>
        <FormGroup>
          <Label>Vaccination Status</Label>
          <Select>
            <option value="Vaccinated">Vaccinated</option>
            <option value="Not Vaccinated">Not Vaccinated</option>
            <option value="Partially Vaccinated">Partially Vaccinated</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Medical History</Label>
          <TextArea placeholder="Describe any medical conditions or history" />
        </FormGroup>
        <FormGroup>
          <Label>Special Needs</Label>
          <TextArea placeholder="Describe any special needs or requirements" />
        </FormGroup>
      </Section>

      {/* Adoption Information Section */}
      <Section>
        <h2>Adoption Information</h2>
        <FormGroup>
          <Label>Adoption Fee</Label>
          <Input type="number" placeholder="Enter adoption fee (e.g., $50)" />
        </FormGroup>
        <FormGroup>
          <Label>Availability</Label>
          <Select>
            <option value="Available">Available</option>
            <option value="Pending Adoption">Pending Adoption</option>
            <option value="Adopted">Adopted</option>
          </Select>
        </FormGroup>
      </Section>

      {/* Upload Image Section */}
      <Section>
        <h2>Upload Images</h2>
        <FormGroup>
          <Label>Animal Photos</Label>
          <Input type="file" accept="image/*" multiple />
        </FormGroup>
      </Section>

      {/* Buttons */}
      <ButtonGroup>
        <Button type="button">Save Draft</Button>
        <Button type="submit" primary>
          Add Animal
        </Button>
      </ButtonGroup>
    </AddAnimalContainer>
  );
};

export default AddAnimal;

// Styled Components
const AddAnimalContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }
`;