const Animal = require('../models/animalModel');
const asyncHandler = require('express-async-handler');

const animalController = {
    // Add new animal listing
    createListing: asyncHandler(async (req, res) => {
        const { name, species, breed, age, size, temperament, healthStatus, vaccinated, spayedNeutered, adoptionFee, description, listedByIndividual, shelterId } = req.body;
        
        const newAnimal = new Animal({
            name, shelterId, species, breed, age, size, temperament, healthStatus, vaccinated, spayedNeutered, adoptionFee, description, photos:req.files, listedByIndividual, // Indicating this pet is listed by an individual
            listedBy: req.user.id,
        });
        
        await newAnimal.save();
        res.send({ message: 'Animal listing created successfully', newAnimal });
    }),

    // Fetch all available animals
    getAllListings: asyncHandler(async (req, res) => {
        const animals = await Animal.find({ status: 'available' });
        res.json({ animals });
    }),

    // Fetch details of a single pet by ID
    getAnimalsByQuery: asyncHandler(async (req, res) => {
        const { search } = req.body;
    
        if (!search) {
            res.status(400);
            throw new Error('Search query is required');
        }
    
        const animals = await Animal.find({
            $or: [
                { name: { $regex: search, $options: 'i' } }, // Case-insensitive search
                { breed: { $regex: search, $options: 'i' } },
                { species: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ]
        });
    
        if (!animals.length) {
            throw new Error('No matching animals found');
        }
    
        res.send({ animals });
    }),
    
        // Edit pet details (shelter/individual)
    updateListing: asyncHandler(async (req, res) => {
        const { id } = req.body;
        const updatedAnimal = await Animal.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAnimal) {
            throw new Error('Animal not found');
        }
        res.send({ message: 'Animal listing updated successfully', updatedAnimal });
    }),

    // Remove a pet listing
    deleteListing: asyncHandler(async (req, res) => {
        const { id } = req.body;
        const deletedAnimal = await Animal.findByIdAndDelete(id);
        if (!deletedAnimal) {
            throw new Error('Animal not found');
        }
        res.send('Animal listing deleted successfully');
    })
};

module.exports = animalController;
