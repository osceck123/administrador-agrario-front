"use client"
import { useEffect, useState } from 'react';
import { getUserProfile } from '@/lib/api';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserProfile(token).then(({ data }) => {
        console.log(data, "que tiene data"),
        setUser(data)});
    }
  }, []);

  if (!user) return <p>Cargando perfil...</p>;

  return (
    <section className='bg-green-200 h-screen text-black'>
      <h1>Perfil</h1>
      <p>Nombre: {user.firstName}</p>
      <p>Apellido: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </section>
  );
}
