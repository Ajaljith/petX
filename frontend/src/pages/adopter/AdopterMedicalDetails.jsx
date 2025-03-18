import React from 'react';
import { useLocation } from 'react-router-dom';

const AdopterMedicalDetails = () => {
    const location = useLocation();
    const { pet } = location.state || {}; // Retrieve the pet details from the state

    if (!pet) {
        return <div>No pet details available.</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{pet.name}'s Medical Details</h1>
            <div style={styles.detailsContainer}>
                <div style={styles.detailItem}>
                    <strong>Breed:</strong> {pet.breed}
                </div>
                <div style={styles.detailItem}>
                    <strong>Age:</strong> {pet.age}
                </div>
                <div style={styles.detailItem}>
                    <strong>Vaccination Status:</strong> {pet.vaccinated ? "Vaccinated ✅" : "Not Vaccinated ❌"}
                </div>
                <div style={styles.detailItem}>
                    <strong>Size:</strong> {pet.size}
                </div>
                <div style={styles.detailItem}>
                    <strong>Status:</strong> {pet.status}
                </div>
                <div style={styles.detailItem}>
                    <strong>Medical History:</strong> {pet.medicalHistory}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '24px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '32px',
        fontWeight: '600',
        marginBottom: '24px',
        color: '#2d3748',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    detailItem: {
        fontSize: '18px',
        color: '#4a5568',
    },
};

export default AdopterMedicalDetails;