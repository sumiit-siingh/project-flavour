import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = authService.getCurrentToken();
                if (token) {
                    const userDetails = await authService.getUserDetails();
                    if (userDetails) {
                        setUser(userDetails);
                    } else {
                        // If user details can't be fetched, clear the token
                        authService.logout();
                    }
                }
            } catch (error) {
                console.error('Failed to load user details:', error);
                authService.logout();
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await authService.login(email, password);
            const userDetails = await authService.getUserDetails();
            setUser(userDetails);
            return response;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const signup = async (name, email, password) => {
        try {
            const response = await authService.signup(name, email, password);
            return response;
        } catch (error) {
            console.error('Signup failed:', error);
            throw error;
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 