import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import background1 from '../assets/background1.jpg'; // Import images
import background2 from '../assets/background2.jpg';
import background3 from '../assets/background3.jpg';

const Portfolio = () => {
    const [expandedId, setExpandedId] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleReadMore = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleAdoptClick = (pet) => {
        // Navigate to the Adoption Form page, passing the pet details as state
        navigate('/adoption-form', { state: { pet } });
    };

    const handleMedicalViewClick = (pet) => {
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
            adoptionFee: "$200",
            image: background1, // Use imported image
            status: "Available",
            medicalHistory: "Routine checkups, no major issues."
        },
        {
            id: 2,
            name: "Whiskers",
            breed: "Maine Coon",
            age: "2 years",
            vaccinated: false,
            size: "Medium",
            adoptionFee: "$150",
            image: background2, // Use imported image
            status: "Adopted",
            medicalHistory: "Requires vaccination and deworming."
        },
        {
            id: 3,
            name: "Max",
            breed: "German Shepherd",
            age: "4 years",
            vaccinated: true,
            size: "Large",
            adoptionFee: "$180",
            image: background3, // Use imported image
            status: "Available",
            medicalHistory: "Recovered from hip dysplasia surgery."
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
                        <p style={styles.petInfo}>Adoption Fee: {pet.adoptionFee}</p>
                    </div>
                    <img src={pet.image} alt={pet.name} style={styles.petImage} />
                    <div style={styles.cardContent}>
                        <p style={styles.petInfo}>Status: {pet.status}</p>
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
                            style={styles.adoptButton}
                            onClick={() => handleAdoptClick(pet)} // Pass the pet object to handleAdoptClick
                        >
                            Adopt
                        </button>
                        <button
                            style={styles.medicalViewButton}
                            onClick={() => handleMedicalViewClick(pet)} // Pass the pet object to handleMedicalViewClick
                        >
                            Medical View
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
    adoptButton: {
        width: '100%',
        backgroundColor: '#48bb78',
        color: '#ffffff',
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '8px',
    },
    medicalViewButton: {
        width: '100%',
        backgroundColor: '#e53e3e',
        color: '#ffffff',
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '8px',
    },
};

export default Portfolio;