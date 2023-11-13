import logo from './assets/logo.png'
import { SiIfood } from "react-icons/si";
import { RiWhatsappFill } from 'react-icons/ri'
import { FaLocationDot } from 'react-icons/fa6'

function App() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className={`bg-[#ffe6e6ff] w-full flex items-center justify-center p-3 mb-4`}>
        <img className='h-32' src={logo} alt="" />
      </div>
      <div className='mx-auto w-full md:max-w-5xl flex flex-col items-center justify-center mb-4'>
        <h1 className="font-bold text-2xl">Seja bem vindo</h1>
        <p>👇 Clique em uma das opções abaixo 👇</p>
      </div>

      <div className='w-full md:max-w-5xl flex flex-col items-center md:mx-auto justify-center gap-3'>
        <a className='md:w-7/12 w-11/12'
          href={`https://api.whatsapp.com/send?phone=5537999162654&text=Olá, estou interessado em conhecer seus lanches, pode me passar seu cardápio por favor?`} target='_blank'>
          <section className={`w-full h-10 rounded-lg bg-[#bb6e7fff] flex gap-2 items-center justify-center`}>
            <RiWhatsappFill size={20} color="#000" />
            <p className='font-medium'>Whatsapp</p>
          </section>
        </a>
        <a className='md:w-7/12 w-11/12'
          href={`https://www.ifood.com.br/delivery/ok-ok/ok/51fcb63d-ebee-4516-8a61-4b27acb18f79?UTM_Medium=share`} target='_blank'>
          <section className={`w-full h-10 rounded-lg bg-[#bb6e7fff] flex gap-2 items-center justify-center`}>
            <SiIfood size={20} color="#000" />
            <p className='font-medium'>Ifood</p>
          </section>
        </a>
        <a className='md:w-7/12 w-11/12'
          href={`https://maps.app.goo.gl/X3y97HSGE2WEp6U47`} target='_blank'>
          <section className={`w-full h-10 rounded-lg bg-[#bb6e7fff] flex gap-2 items-center justify-center`}>
            <FaLocationDot size={20} color="#000" />
            <p className='font-medium'>Endereço</p>
          </section>
        </a>
      </div>
    </div>
  )
}

export default App
