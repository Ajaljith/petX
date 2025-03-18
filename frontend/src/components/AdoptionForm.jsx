import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AdoptionForm = () => {
    const location = useLocation();
    const { pet } = location.state || {};
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Adoption request submitted successfully!');
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.heading}>Adoption Form for {pet?.name}</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Address:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        style={styles.textarea}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                        required
                    />
                </label>
                <button type="submit" style={styles.submitButton}>
                    Submit Adoption Request
                </button>
            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        border: '1px solid #eaeaea',
    },
    heading: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#333333',
        marginBottom: '20px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '20px',
        fontSize: '14px',
        color: '#333333',
        fontWeight: '500',
    },
    input: {
        padding: '12px',
        fontSize: '14px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        marginTop: '8px',
        backgroundColor: '#f9f9f9',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        width: '100%',
        boxSizing: 'border-box',
    },
    textarea: {
        padding: '12px',
        fontSize: '14px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        marginTop: '8px',
        height: '120px',
        backgroundColor: '#f9f9f9',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        width: '100%',
        boxSizing: 'border-box',
        resize: 'vertical',
    },
    submitButton: {
        padding: '12px 24px',
        fontSize: '16px',
        backgroundColor: '#0070f3',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '20px',
        fontWeight: '600',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        width: '100%',
    },
};

export default AdoptionForm;