let products = [
  {
    id: "1",
    title: "Zapatillas Nike Air Max Sc",
    description:
      "Para vos que te gusta lo clásico de la marca, las zapatillas Nike Air Max Sc son la nueva generación del ícono. Diseñada con líneas impecables, versátiles y atemporales, mantienen la misma suela icónica, revestimientos cosidos y detalles clásicos que iniciaron la revolución. Su cámara de aire visible te da un estilo característico de Nike. No es una nueva versión, es un recordatorio.",
    price: 300,
    pictureUrl: "http://placeimg.com/640/480/business",
    category: "zapatillas",
  },
  {
    id: "2",
    title: "Camiseta adidas Selección Argentina",
    description:
      "La camiseta adidas de la Selección Argentina de fútbol (AFA) versión alternativa representa los colores de un país que vive para el fútbol y deja todo de lado cada vez que hay un Mundial, Copa América, Eliminatorias o un simple amistoso. Confeccionada en poliéster y con tecnología HEAT.RDY para mantenerte en alto rendimiento en todo momento. Usala cuando quieras, sentila siempre.",
    price: 200,
    pictureUrl: "http://placeimg.com/640/480/business",
    category: "remera",
  },
  {
    id: "3",
    title: "Remera Loop Up Fitness",
    description:
      "La Remera Loop Up Fitness es tu fiel compañera a la hora entrenar con todo. Confeccionada en polyester se ajusta a tu cuerpo y se mueve con vos hagas el movimiento que hagas. Es cómoda, liviana y transpirable para esas rutinas en las que das tu 100%.",
    price: 120,
    pictureUrl: "http://placeimg.com/640/480/business",
    category: "remera",
  },
  {
    id: "4",
    title: "Botines Topper San Ciro V Tf",
    description:
      "Si buscás velocidad inalcanzable y jugadas perfectas, los Botines Topper San Ciro V son perfectos para vos, su capellada en cuero sintético con costuras los hace más resistentes dándote una sujeción extrema; la plantilla de EVA, su suela liviana y flexible tipo Turf te brinda rápida y buena aceleración bajo presión. Ideales para que tengas la mejor precisión en cada jugada y mayor control del balón, luciendo como un campeón en la cancha.",
    price: 600,
    pictureUrl: "http://placeimg.com/640/480/business",
    category: "zapatillas",
  },
  {
    id: "5",
    title: "Zapatillas adidas Coreracer",
    description:
      "Urbanas, livianas y frescas, las Zapatillas adidas Coreracer están pensadas para cumplir con las demandas de los corredores más exigentes. Su suela tiene un estabilizador de talón y su capellada es transpirable para mantener el confort que mereces durante todo tu trayecto.",
    price: 111,
    pictureUrl: "http://placeimg.com/640/480/business",
    category: "zapatillas",
  },
  {
    id: "6",
    title: "Zapatillas adidas Coreracer",
    description:
      "Urbanas, livianas y frescas, las Zapatillas adidas Coreracer están pensadas para cumplir con las demandas de los corredores más exigentes. Su suela tiene un estabilizador de talón y su capellada es transpirable para mantener el confort que mereces durante todo tu trayecto.",
    price: 111,
    pictureUrl: "http://placeimg.com/640/480/business",
    category: "zapatillas",
  },
];

export const getFetch = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  } else {
    reject("404");
  }
});

export const getFetchprod = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(products[0]);
    }, 2000);
  } else {
    reject("404");
  }
});
