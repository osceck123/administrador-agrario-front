"use client"
import { useState } from 'react';
import { register } from '@/lib/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Register() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ "first_name": first_name, 
       "last_name":  last_name, 
       "email":email, 
       "password": password });
      router.push('/auth/login');
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  return (
    <section className='flex w-full'>
      <article className='bg-backgroudFarm h-screen w-1/2 flex flex-col  items-center '>
      <div className='h-1/4 flex flex-col justify-center items-center font-bold text-[#102601]'>
      <h1 className='text-4xl'>Farm stat</h1>
      <p className='w-1/2 text-balance text-justify first-letter:text-lg  font-medium'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
</p>
      </div>
      
      <form className='bg-[#BFA688] w-3/4 flex flex-col justify-center items-center p-20 text-center text-lg text-black rounded-3xl' onSubmit={handleSubmit}>
      <label>Registrarse</label>
      <input className='my-4 py-2 px-2 w-1/2' type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} placeholder="Nombre" required />
      <input className='my-4 py-2 px-2 w-1/2' type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} placeholder="Apellido" required />
      <input className='my-4 py-2 px-2 w-1/2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input className='my-4 py-2 px-2 w-1/2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
      <button className='bg-blue-500 text-white px-4 py-3 rounded-md cursor-pointer hover:bg-blue-100 hover:text-black' type="submit">Registrarse</button>
      <label className='mt-2 py-2'>Ya tenes cuenta, entonces </label>
      <Link className='bg-[#467302] rounded-md cursor-pointer px-4 py-3' href={"/auth/register"}>Inicia Sesion</Link>

    </form>
      </article>
      
      
      <article className='h-screen bg-emerald-100 w-1/2'>
      <Image src={"/farm.jpg"} width={1600} height={729} alt='imagen de granja' className='h-screen w-full'/>
      </article>
      
      

    </section>
  );
}


