import { useEffect } from "react";

export default function WhatsappRedirect() {
  useEffect(() => {
    const urlApp = "https://api.whatsapp.com/send?phone=50255162181&text=%C2%A1Hola%20Lic!%20Vi%20su%20perfil%20en%20redes%20sociales%20y%20estoy%20interesado%2Fa%20en%20iniciar%20terapia%20psicol%C3%B3gica%20con%20usted.%0A%0AMi%20nombre%20es%20%5BESCRIBA%20SU%20NOMBRE%5D%2C%0A%20%0ASoy%20de%20%5BESCRIBA%20EL%20PA%C3%8DS%20DE%20DONDE%20SE%20ENCUENTRA%5D%0A%0ATengo%20%5BESCRIBA%20CU%C3%81NTOS%20A%C3%91OS%20TIENE%20ACTUALMENTE%5D%20a%C3%B1os.%20%0A%0AActualmente%2C%20tengo%20estudios%20en%20%5BINDIQUE%20QUE%20ESTUDIOS%20TIENE%20ACTUALMENTE%5D.";
    const urlWeb = "https://api.whatsapp.com/send?phone=50255162181&text=%C2%A1Hola%20Lic!%20Vi%20su%20perfil%20en%20redes%20sociales%20y%20estoy%20interesado%2Fa%20en%20iniciar%20terapia%20psicol%C3%B3gica%20con%20usted.%0A%0AMi%20nombre%20es%20%5BESCRIBA%20SU%20NOMBRE%5D%2C%0A%20%0ASoy%20de%20%5BESCRIBA%20EL%20PA%C3%8DS%20DE%20DONDE%20SE%20ENCUENTRA%5D%0A%0ATengo%20%5BESCRIBA%20CU%C3%81NTOS%20A%C3%91OS%20TIENE%20ACTUALMENTE%5D%20a%C3%B1os.%20%0A%0AActualmente%2C%20tengo%20estudios%20en%20%5BINDIQUE%20QUE%20ESTUDIOS%20TIENE%20ACTUALMENTE%5D.";

    window.location.href = urlApp;

    setTimeout(() => {
      window.location.href = urlWeb;
    }, 5000);
  }, []);

  return (
<div style={{
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.85)",
  fontFamily: "Arial, sans-serif",
  padding: "20px"
}}>
  
  <div style={{
    border: "2px solid white",
    borderRadius: "16px",
    padding: "30px 25px",
    width: "260px",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(4px)"
  }}>

    {/* Loader */}
    <div 
      style={{
        width: "45px",
        height: "45px",
        border: "4px solid rgba(255,255,255,0.3)",
        borderTop: "4px solid white",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "0 auto 20px auto"
      }}
    />

    <h2 style={{
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "10px"
    }}>
      Redirigiendo…
    </h2>

    <p style={{
      color: "white",
      fontSize: "14px",
      opacity: 0.9,
      marginBottom: "10px"
    }}>
      Si no se abre WhatsApp automáticamente:
    </p>

    <p style={{
      color: "white",
      fontSize: "14px",
      fontWeight: "bold"
    }}>
      Abre en el navegador externo.
    </p>

    <p style={{
      color: "white",
      fontSize: "12px",
      opacity: 0.7,
      marginTop: "10px"
    }}>
      En TikTok toca los <strong>…</strong> y elige  
      <strong> “Abrir en el navegador”</strong>.
    </p>

  </div>

  {/* Loader animation */}
  <style>
    {`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
  </style>
</div>

  );
}