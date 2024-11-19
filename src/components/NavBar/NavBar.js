import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ isLoggedIn }) {
  return (
    <nav className='w-full bg-[#D9CA7E] py-4 flex flex-row flex-nowrap'>
      {isLoggedIn ? (
        <>
        {/*seccion para la imagen del logo*/}
        <div className=' w-2/12 flex justify-center py-1'>
            <Image src={"./next.svg"} width={150} height={150} alt='logo' />
        </div>
        {/*link para recorrer la pagina*/}
        <ul className='w-8/12 flex text-center font-semibold text-black mx-1 py-1 px-8'>
          <Link href="/profile">Perfil</Link>
        </ul>
        {/*botonoes de inicion y registrar*/}
        <ul className='w-2/12 flex justify-center py-1 text-center space-x-4'>
          <button
          className='px-4  rounded-sm text-lg bg-[#8C6F56]' 
          onClick={() => localStorage.removeItem('token')}>Cerrar Sesión</button>
        </ul>
        </>
      ) : (
        <>
        {/*seccion para la imagen del logo*/}
          <div className=' w-2/12 flex justify-center py-1'>
            <Image src={"./next.svg"} width={150} height={150} alt='logo' />
          </div>
        {/*link para recorrer la pagina*/}
          <ul className='w-8/12 flex text-center font-semibold text-black mx-1 py-1 px-8'>
            <Link className='w-1/6' href={"#"}>Inicio</Link>
            <Link className='w-1/6' href={"#"}>Soluciones</Link>
            <Link className='w-1/6' href={"#"}>Resultados</Link>
            <Link className='w-1/6' href={"#"}>Nuestro objetivo</Link>
            <Link className='w-1/6' href={"#"}>Conocenos</Link>
          </ul>

        {/*botonoes de inicion y registrar*/}
         <ul className='w-2/12 flex justify-center py-1 text-center space-x-4'>
         <Link className='px-4  rounded-sm text-lg bg-[#8C6F56]' href="/login">Iniciar Sesión</Link>
         <Link className='px-4  rounded-sm text-lg bg-[#A0BF30]' href="/register">Registrarse</Link>
          </ul> 
        
          
        </>
      )}
    </nav>
  );
}
