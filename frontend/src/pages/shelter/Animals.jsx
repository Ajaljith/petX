import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import background1 from '../../assets/background1.jpg'; // Import images
import background2 from '../../assets/background2.jpg';
import background3 from '../../assets/background3.jpg';

const Animals = () => {
    const [expandedId, setExpandedId] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleReadMore = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleMedicalDetails = (pet) => {
        // Navigate to the Adopter Medical Details page, passing the pet details as state
        navigate('/adopter/medical-details', { state: { pet } });
    };

    const pets = [
        {
            id: 1,
            name: "Bella",
            breed: "Golden Retriever",
            age: "3 years",
            vaccinated: true,
            size: "Large",
            medicalHistory: "Routine checkups, no major issues.",
            image: background1, // Use imported image
            status: "Healthy"
        },
        {
            id: 2,
            name: "Whiskers",
            breed: "Maine Coon",
            age: "2 years",
            vaccinated: false,
            size: "Medium",
            medicalHistory: "Requires vaccination and deworming.",
            image: background2, // Use imported image
            status: "Under Observation"
        },
        {
            id: 3,
            name: "Max",
            breed: "German Shepherd",
            age: "4 years",
            vaccinated: true,
            size: "Large",
            medicalHistory: "Recovered from hip dysplasia surgery.",
            image: background3, // Use imported image
            status: "Recovering"
        },
    ];

    return (
        <div style={styles.grid}>
            {pets.map((pet) => (
                <div key={pet.id} style={styles.card}>
                    <div style={styles.cardContent}>
                        <h2 style={styles.petName}>{pet.name}</h2>
                        <p style={styles.petInfo}>Breed: {pet.breed}</p>
                        <p style={styles.petInfo}>Age: {pet.age}</p>
                        <p style={pet.vaccinated ? styles.vaccinated : styles.notVaccinated}>
                            {pet.vaccinated ? "Vaccinated ✅" : "Not Vaccinated ❌"}
                        </p>
                        <p style={styles.petInfo}>Size: {pet.size}</p>
                        <p style={styles.petInfo}>Status: {pet.status}</p>
                    </div>
                    <img src={pet.image} alt={pet.name} style={styles.petImage} />
                    <div style={styles.cardContent}>
                        {expandedId === pet.id && (
                            <p style={styles.moreInfo}>
                                <strong>Medical History:</strong> {pet.medicalHistory}
                            </p>
                        )}
                        <button
                            style={styles.readMoreButton}
                            onClick={() => toggleReadMore(pet.id)}
                        >
                            {expandedId === pet.id ? "Read Less" : "Read More"}
                        </button>
                        <button
                            style={styles.medicalDetailsButton}
                            onClick={() => handleMedicalDetails(pet)} // Pass the pet object to handleMedicalDetails
                        >
                            Medical Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Inline styles
const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        padding: '24px',
        backgroundColor: '#f7fafc',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    cardContent: {
        padding: '16px',
    },
    petName: {
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '8px',
    },
    petInfo: {
        color: '#4a5568',
        marginBottom: '8px',
    },
    vaccinated: {
        color: '#38a169',
        marginBottom: '8px',
    },
    notVaccinated: {
        color: '#e53e3e',
        marginBottom: '8px',
    },
    petImage: {
        width: '100%',
        height: '240px',
        objectFit: 'cover',
    },
    moreInfo: {
        marginTop: '8px',
        color: '#2d3748',
    },
    readMoreButton: {
        width: '100%',
        backgroundColor: '#4299e1',
        color: '#ffffff',
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '12px',
    },
    medicalDetailsButton: {
        width: '100%',
        backgroundColor: '#48bb78',
        color: '#ffffff',
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '8px',
    },
};

export default Animals;