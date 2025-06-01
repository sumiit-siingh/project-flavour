import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Profile = () => {
    const { user, isAuthenticated, loading } = useAuth();
    const [addresses, setAddresses] = useState([]);
    const [isAddingAddress, setIsAddingAddress] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [newAddress, setNewAddress] = useState({
        street: '',
        city: '',
        state: '',
        pincode: '',
        isDefault: false
    });

    const capitalizeFirstLetter = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        try {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return 'N/A';
            return date.toLocaleDateString('en-US', options);
        } catch (error) {
            return 'N/A';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    const handleAddAddress = () => {
        if (newAddress.isDefault) {
            setAddresses(addresses.map(addr => ({ ...addr, isDefault: false })));
        }
        setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
        setNewAddress({
            street: '',
            city: '',
            state: '',
            pincode: '',
            isDefault: false
        });
        setIsAddingAddress(false);
    };

    const handleEditAddress = (address) => {
        setEditingAddress(address);
        setNewAddress(address);
        setIsAddingAddress(true);
    };

    const handleUpdateAddress = () => {
        setAddresses(addresses.map(addr => 
            addr.id === editingAddress.id ? { ...newAddress, id: addr.id } : addr
        ));
        setEditingAddress(null);
        setNewAddress({
            street: '',
            city: '',
            state: '',
            pincode: '',
            isDefault: false
        });
        setIsAddingAddress(false);
    };

    const handleDeleteAddress = (addressId) => {
        setAddresses(addresses.filter(addr => addr.id !== addressId));
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4">
                {/* Profile Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-amber-400 flex items-center justify-center text-gray-900 font-bold text-4xl">
                            {capitalizeFirstLetter(user.name).charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{capitalizeFirstLetter(user.name)}</h1>
                            <p className="text-gray-600">{user.email}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Member since {formatDate(user?.createdAt)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Addresses Section */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-amber-400" />
                            My Addresses
                        </h2>
                        <button
                            onClick={() => {
                                setIsAddingAddress(true);
                                setEditingAddress(null);
                                setNewAddress({
                                    street: '',
                                    city: '',
                                    state: '',
                                    pincode: '',
                                    isDefault: false
                                });
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-900 rounded-lg hover:bg-amber-500 transition-colors duration-300"
                        >
                            <FaPlus />
                            Add New Address
                        </button>
                    </div>

                    {/* Add/Edit Address Form */}
                    {isAddingAddress && (
                        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                            <h3 className="text-lg font-medium mb-4">
                                {editingAddress ? 'Edit Address' : 'Add New Address'}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                                    <input
                                        type="text"
                                        value={newAddress.street}
                                        onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                        placeholder="Enter street address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        value={newAddress.city}
                                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                        placeholder="Enter city"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                    <input
                                        type="text"
                                        value={newAddress.state}
                                        onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                        placeholder="Enter state"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                                    <input
                                        type="text"
                                        value={newAddress.pincode}
                                        onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                        placeholder="Enter pincode"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="defaultAddress"
                                    checked={newAddress.isDefault}
                                    onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                                    className="w-4 h-4 text-amber-400 focus:ring-amber-400 border-gray-300 rounded"
                                />
                                <label htmlFor="defaultAddress" className="text-sm text-gray-700">
                                    Set as default address
                                </label>
                            </div>
                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={editingAddress ? handleUpdateAddress : handleAddAddress}
                                    className="px-4 py-2 bg-amber-400 text-gray-900 rounded-lg hover:bg-amber-500 transition-colors duration-300"
                                >
                                    {editingAddress ? 'Update Address' : 'Save Address'}
                                </button>
                                <button
                                    onClick={() => {
                                        setIsAddingAddress(false);
                                        setEditingAddress(null);
                                    }}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Addresses List */}
                    <div className="space-y-4">
                        {addresses.map((address) => (
                            <div
                                key={address.id}
                                className="p-4 border border-gray-200 rounded-lg hover:border-amber-400 transition-colors duration-300"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-gray-900 font-medium">{address.street}</p>
                                        <p className="text-gray-600">
                                            {address.city}, {address.state} - {address.pincode}
                                        </p>
                                        {address.isDefault && (
                                            <span className="inline-block mt-2 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                                                Default Address
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEditAddress(address)}
                                            className="p-2 text-gray-600 hover:text-amber-400 transition-colors duration-300"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteAddress(address.id)}
                                            className="p-2 text-gray-600 hover:text-red-500 transition-colors duration-300"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {addresses.length === 0 && !isAddingAddress && (
                            <div className="text-center py-8 text-gray-500">
                                No addresses added yet. Click "Add New Address" to add one.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile; 