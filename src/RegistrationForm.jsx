// src/LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!password) {
      setError('Please enter your password');
      return;
    }

    // Handle successful form submission
    setError('');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8, boxShadow: 3, p: 4, borderRadius: 2 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        {error && (
          <Typography color="error" variant="body2" gutterBottom>
            {error}
          </Typography>
        )}
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;