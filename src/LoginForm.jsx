import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Please fill out this field');
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('Please fill out this field');
    } else {
      setPasswordError('');
    }
    if (email && password) {
      // Handle form submission
      console.log('Email:', email);
      console.log('Password:', password);
    }
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
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
          error={!!passwordError}
          helperText={passwordError}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
