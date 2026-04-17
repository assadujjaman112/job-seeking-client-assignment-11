import { useState } from "react";

const partners = [
  { name: "Google",     domain: "google.com",     tile: "bg-amber-50 border-amber-200",        text: "text-amber-700" },
  { name: "Amazon",     domain: "amazon.com",     tile: "bg-orange-50 border-orange-200",      text: "text-orange-700" },
  { name: "Microsoft",  domain: "microsoft.com",  tile: "bg-[#331D2C]/10 border-[#331D2C]/20", text: "text-[#331D2C]" },
  { name: "Meta",       domain: "meta.com",       tile: "bg-rose-50 border-rose-200",          text: "text-rose-700" },
  { name: "Apple",      domain: "apple.com",      tile: "bg-stone-100 border-stone-300",       text: "text-stone-700" },
  { name: "Netflix",    domain: "netflix.com",    tile: "bg-amber-100 border-amber-300",       text: "text-amber-800" },
  { name: "Spotify",    domain: "spotify.com",    tile: "bg-[#4e2a42]/10 border-[#4e2a42]/20", text: "text-[#4e2a42]" },
  { name: "Adobe",      domain: "adobe.com",      tile: "bg-rose-100 border-rose-300",         text: "text-rose-800" },
  { name: "Salesforce", domain: "salesforce.com", tile: "bg-orange-100 border-orange-300",     text: "text-orange-700" },
  { name: "Intel",      domain: "intel.com",      tile: "bg-amber-50 border-amber-200",        text: "text-amber-600" },
];

const LogoItem = ({ name, domain, tile, text }) => {
  const [error, setError] = useState(false);
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <div className={`shrink-0 w-36 h-20 mx-4 flex flex-col items-center justify-center rounded-2xl border-2 shadow-sm px-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${tile}`}>
      {error ? (
        <>
          <span className={`text-lg font-extrabold leading-none ${text}`}>{initials}</span>
          <span className={`text-xs font-semibold mt-1 opacity-60 ${text}`}>{name}</span>
        </>
      ) : (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          className="max-h-9 max-w-full object-contain"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

const PartnerLogos = () => {
  const doubled = [...partners, ...partners];

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          Trusted by leading companies worldwide
        </p>
        <div className="w-12 h-0.5 bg-amber-400 mx-auto rounded-full"></div>
      </div>

      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee">
          {doubled.map((partner, i) => (
            <LogoItem key={`${partner.name}-${i}`} name={partner.name} domain={partner.domain} tile={partner.tile} text={partner.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
