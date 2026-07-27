import { restaurantInfo } from '../data/mock';

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
      {/* Accent Color Block (Info) */}
      <div className="w-full md:w-1/2 bg-accent text-cream flex flex-col justify-center px-8 sm:px-16 py-20">
        <span className="text-xs tracking-[0.2em] uppercase text-cream/70 mb-6">Contáctanos</span>
        <h2 className="font-serif italic text-6xl sm:text-7xl mb-12">Reservas</h2>
        
        <div className="space-y-8 text-cream/90 tracking-wide text-sm sm:text-base max-w-sm">
          <div>
            <p className="font-semibold mb-1">Dirección</p>
            <p>{restaurantInfo.direccion}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Teléfono</p>
            <p>{restaurantInfo.telefono}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Horarios</p>
            <p>{restaurantInfo.horarios}</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-cream text-dark flex flex-col justify-center px-8 sm:px-16 py-20">
        <div className="max-w-md w-full mx-auto md:mx-0">
          <h3 className="font-serif italic text-4xl mb-8">Envíanos un Mensaje</h3>
          
          <form className="space-y-8">
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                placeholder=" "
                className="block w-full bg-transparent border-0 border-b border-dark/30 focus:border-dark focus:ring-0 px-0 py-2 text-dark placeholder-transparent peer transition-colors" 
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-dark/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-dark/50 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-dark"
              >
                Nombre
              </label>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                placeholder=" "
                className="block w-full bg-transparent border-0 border-b border-dark/30 focus:border-dark focus:ring-0 px-0 py-2 text-dark placeholder-transparent peer transition-colors" 
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-dark/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-dark/50 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-dark"
              >
                Correo Electrónico
              </label>
            </div>
            
            <div className="relative pt-2">
              <textarea 
                id="message" 
                rows={3} 
                placeholder=" "
                className="block w-full bg-transparent border-0 border-b border-dark/30 focus:border-dark focus:ring-0 px-0 py-2 text-dark placeholder-transparent peer transition-colors resize-none"
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 -top-1.5 text-xs tracking-widest uppercase text-dark/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-dark/50 peer-placeholder-shown:top-4 peer-focus:-top-1.5 peer-focus:text-xs peer-focus:text-dark"
              >
                Mensaje
              </label>
            </div>
            
            <button 
              type="button" 
              className="mt-8 bg-dark text-cream hover:bg-black uppercase tracking-[0.2em] text-xs font-semibold py-4 px-10 rounded-full transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
