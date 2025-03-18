import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print"; // Import react-to-print

const PetMedicalDetailsForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pet } = location.state || {}; // Get pet data from navigation state

  // State for medical details
  const [medicalDetails, setMedicalDetails] = useState({
    shelterId: pet?.shelterId || "",
    checkupDate: pet?.checkupDate || new Date().toISOString().split("T")[0],
    diagnosis: pet?.diagnosis || "",
    treatment: pet?.treatment || "",
    medications: pet?.medications || [{ name: "", dosage: "", frequency: "" }],
    vaccinations: pet?.vaccinations || [{ name: "", dateGiven: "", nextDueDate: "" }],
    spayedNeutered: pet?.spayedNeutered || false,
    specialNeeds: pet?.specialNeeds || "",
    notes: pet?.notes || "",
    attachments: pet?.attachments || [],
  });

  // Ref for the form to be printed
  const componentRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Medical Details:", medicalDetails);
    alert("Medical details saved successfully!");
    navigate("/clinic/animals"); // Navigate back to the animals list
  };

  // Handle PDF print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current, // Reference to the form content
    documentTitle: `MedicalDetails_${pet?.name}`, // PDF file name
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicalDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle medication changes
  const handleMedicationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMedications = [...medicalDetails.medications];
    updatedMedications[index][name] = value;
    setMedicalDetails((prev) => ({ ...prev, medications: updatedMedications }));
  };

  // Handle vaccination changes
  const handleVaccinationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVaccinations = [...medicalDetails.vaccinations];
    updatedVaccinations[index][name] = value;
    setMedicalDetails((prev) => ({ ...prev, vaccinations: updatedVaccinations }));
  };

  // Add a new medication
  const addMedication = () => {
    setMedicalDetails((prev) => ({
      ...prev,
      medications: [...prev.medications, { name: "", dosage: "", frequency: "" }],
    }));
  };

  // Add a new vaccination
  const addVaccination = () => {
    setMedicalDetails((prev) => ({
      ...prev,
      vaccinations: [...prev.vaccinations, { name: "", dateGiven: "", nextDueDate: "" }],
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Medical Details for {pet?.name}</h2>
      <form onSubmit={handleSubmit} style={styles.form} ref={componentRef}>
        {/* Checkup Date */}
        <label style={styles.label}>
          Checkup Date:
          <input
            type="date"
            name="checkupDate"
            value={medicalDetails.checkupDate}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>

        {/* Diagnosis */}
        <label style={styles.label}>
          Diagnosis:
          <textarea
            name="diagnosis"
            value={medicalDetails.diagnosis}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </label>

        {/* Treatment */}
        <label style={styles.label}>
          Treatment:
          <textarea
            name="treatment"
            value={medicalDetails.treatment}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </label>

        {/* Medications */}
        <h3 style={styles.subHeading}>Medications</h3>
        {medicalDetails.medications.map((medication, index) => (
          <div key={index} style={styles.medicationContainer}>
            <label style={styles.label}>
              Medication Name:
              <input
                type="text"
                name="name"
                value={medication.name}
                onChange={(e) => handleMedicationChange(index, e)}
                style={styles.input}
                required
              />
            </label>
            <label style={styles.label}>
              Dosage:
              <input
                type="text"
                name="dosage"
                value={medication.dosage}
                onChange={(e) => handleMedicationChange(index, e)}
                style={styles.input}
                required
              />
            </label>
            <label style={styles.label}>
              Frequency:
              <input
                type="text"
                name="frequency"
                value={medication.frequency}
                onChange={(e) => handleMedicationChange(index, e)}
                style={styles.input}
                required
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addMedication} style={styles.addButton}>
          Add Medication
        </button>

        {/* Vaccinations */}
        <h3 style={styles.subHeading}>Vaccinations</h3>
        {medicalDetails.vaccinations.map((vaccination, index) => (
          <div key={index} style={styles.vaccinationContainer}>
            <label style={styles.label}>
              Vaccine Name:
              <input
                type="text"
                name="name"
                value={vaccination.name}
                onChange={(e) => handleVaccinationChange(index, e)}
                style={styles.input}
                required
              />
            </label>
            <label style={styles.label}>
              Date Given:
              <input
                type="date"
                name="dateGiven"
                value={vaccination.dateGiven}
                onChange={(e) => handleVaccinationChange(index, e)}
                style={styles.input}
                required
              />
            </label>
            <label style={styles.label}>
              Next Due Date:
              <input
                type="date"
                name="nextDueDate"
                value={vaccination.nextDueDate}
                onChange={(e) => handleVaccinationChange(index, e)}
                style={styles.input}
                required
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addVaccination} style={styles.addButton}>
          Add Vaccination
        </button>

        {/* Spayed/Neutered */}
        <label style={styles.label}>
          Spayed/Neutered:
          <input
            type="checkbox"
            name="spayedNeutered"
            checked={medicalDetails.spayedNeutered}
            onChange={(e) =>
              setMedicalDetails((prev) => ({ ...prev, spayedNeutered: e.target.checked }))
            }
            style={styles.checkbox}
          />
        </label>

        {/* Special Needs */}
        <label style={styles.label}>
          Special Needs:
          <textarea
            name="specialNeeds"
            value={medicalDetails.specialNeeds}
            onChange={handleInputChange}
            style={styles.textarea}
          />
        </label>

        {/* Notes */}
        <label style={styles.label}>
          Notes:
          <textarea
            name="notes"
            value={medicalDetails.notes}
            onChange={handleInputChange}
            style={styles.textarea}
          />
        </label>

        {/* Save Button */}
        <button type="submit" style={styles.submitButton}>
          Save Details
        </button>
      </form>

      {/* Print PDF Button */}
      <button onClick={handlePrint} style={styles.printButton}>
        Print PDF
      </button>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: "500",
    marginTop: "16px",
    marginBottom: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  label: {
    fontSize: "16px",
    color: "#4a5568",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #cbd5e0",
    marginTop: "8px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #cbd5e0",
    marginTop: "8px",
  },
  medicationContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    border: "1px solid #cbd5e0",
    padding: "12px",
    borderRadius: "8px",
  },
  vaccinationContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    border: "1px solid #cbd5e0",
    padding: "12px",
    borderRadius: "8px",
  },
  addButton: {
    backgroundColor: "#4299e1",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "8px",
  },
  submitButton: {
    backgroundColor: "#48bb78",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  printButton: {
    backgroundColor: "#4299e1",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "16px",
    width: "100%",
  },
  checkbox: {
    marginLeft: "8px",
  },
};

export default PetMedicalDetailsForm;