"use client"
import { useEffect, useState } from 'react';
import { getUserProfile } from '@/lib/api';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserProfile(token).then(({ data }) => setUser(data));
    }
  }, []);

  if (!user) return <p>Cargando perfil...</p>;

  return (
    <div>
      <h1>Perfil</h1>
      <p>Nombre: {user.firstName}</p>
      <p>Apellido: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
