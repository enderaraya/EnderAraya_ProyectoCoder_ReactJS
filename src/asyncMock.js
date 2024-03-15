const products = [
    { 
        id: '1', 
        name: 'Samsung Galaxy Watch 4', 
        price: 180000, 
        category: 'accesorios', 
        img:'https://images.samsung.com/is/image/samsung/p6pim/cl/2307/gallery/cl-galaxy-watch6-r935-sm-r930nzkalta-thumb-537403764', 
        stock: 25, 
        description:'Samsung Galaxy Watch4 40mm. El reloj que mejor te conoce. La mayoría de nosotros queremos saber más sobre nosotros mismos, para poder ser nuestra mejor versión. Es por eso que diseñamos el nuevo Galaxy Watch4 para que sea el compañero de su viaje hacia una persona más saludable.'
    },
    { 
        id: '2', 
        name: 'Iphone 15', 
        price: 950000, 
        category: 'electronica', 
        img:'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Apple-iphone-15-pro-black-titanium-1TB-Back-Front-View.png', 
        stock: 25, 
        description:'El nuevo e innovador diseño cuenta con una parte posterior de vidrio con infusión de color en todo el material. Y gracias a que el vidrio pasa por un proceso de intercambio iónico dual personalizado y a la carcasa de aluminio de calidad aeroespacial, el iPhone 15 tiene una resistencia increíble.'
    },
    { 
        id: '3', 
        name: 'Playstation 5', 
        price: 450000, 
        category: 'electronica', 
        img:'https://nintecno.cl/wp-content/uploads/2023/07/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20-1.png', 
        stock: 25, 
        description:'Experimenta cargas superrápidas gracias a una unidad de estado sólido (SSD) de alta velocidad, una inmersión más profunda con retroalimentación háptica, gatillos adaptables y audio 3D, además de una nueva generación de increíbles juegos de PlayStation®.'
    },
    { 
        id: '4', 
        name: 'Nintendo Switch OLED', 
        price: 350000, 
        category: 'electronica', 
        img:'https://power-play.cl/wp-content/uploads/2022/10/CONSOLA-NINTENDO-SWITCH-OLED-WHITE-2.png', 
        stock: 25, 
        description:'Con tu consola Switch tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.Switch se convirtió en una de las consolas más versátiles del mercado gracias a su uso portátil y de sobremesa. Nintendo desarrolló este modelo con el objetivo de tener todas las comodidades de la tecnología de elite en un aparato portátil con el que podrás jugar y disfrutar de diverso contenido online.'
    },
    { 
        id: '5', 
        name: 'Cafetera Nespresso Inissia Negra', 
        price: 95000, 
        category: 'hogar', 
        img:'https://www.nespresso.com/ecom/medias/sys_master/public/10392431329310/MACHINES-B2C-NESPRESSO-INISSIA-INISSIA-D40BK-BLACK-022120141557.png', 
        stock: 25, 
        description:'la Cafetera Inissia y su diseño simple y compacto, entrega la mejor experiencia de placer inigualable de un café perfecto. Gracias a un sencillo sistema de extracción patentado que se activa con solo pulsar un botón y que produce una presión de hasta 19 bares, podrá preparar con facilidad cafés perfectos taza tras taza.'
    },
    { 
        id: '6', 
        name: 'Refrigerador Hisense No-Frost 300L', 
        price: 400000, 
        category: 'hogar', 
        img:'https://falabella.scene7.com/is/image/Falabella/11927533_4?wid=800&hei=800&qlt=70', 
        stock: 25, 
        description:'Integra a tu hogar la tecnología y pulcritud de Hisense con su gama de refrigeradores Bottom Freezer. En esta ocasión deslumbra a tu familia con el práctico refrigerador RD-22DC de 165 litros de capacidad. Soberbia apuesta para mantener por más tiempo la duración de tus alimentos o productos. '
    },
    { 
        id: '7', 
        name: 'Lavadora LG Turbodrum 9Kg', 
        price: 320000, 
        category: 'hogar', 
        img:'https://falabella.scene7.com/is/image/Falabella/15001887_2?wid=800&hei=800&qlt=70', 
        stock: 25, 
        description:'Nuestros Motores Smart Inverter ajustan la energía según la velocidad y la fuerza que requiere cada movimiento del tambor, así controla con eficiencia el consumo energético. Obtén un control preciso de los movimientos del tambor y más Ahorro de Energía con Smart Inverter. El motor Smart Inverter es confiable, silencioso y duradero.'
    },
    { 
        id: '8', 
        name: 'RM4  Broadlink', 
        price: 40000, 
        category: 'domotica', 
        img:'https://www.connectia.cl/wp-content/uploads/2020/06/Broadlink-RM4-PRO-3.png', 
        stock: 25, 
        description:'BroadLink RM4 pro IR RF Control remoto Hub con cable de sensor Controlador inteligente WiFi para automatización del hogar, TV, ventilador de techo, control remoto de cortina, funciona con Alexa, Asistente de , IFTTT, Siri'
    },
    { 
        id: '9', 
        name: 'Smart Plug Tuya', 
        price: 12000, 
        category: 'domotica', 
        img:'https://images.tuyacn.com/ecommerce/1659758475bb2e9ceea5c.JPG?x-oss-process=image/resize,w_510', 
        stock: 25, 
        description:' Enciende tus electrodomésticos y cualquier equipo conectado al Smart Plug (ventilador, luces, horno de microondas, impresora, etc) Utilizando la aplicación Smart Life en tu teléfono celular o indicando los comandos a Google Assistant o Alexa.'
    },
    { 
        id: '10', 
        name: 'Amazon Echo Dot 4', 
        price: 45000, 
        category: 'domotica', 
        img:'https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2022/04/25234450/IMG_6810.png', 
        stock: 25, 
        description:'Súmate al mundo de la inteligencia artificial con el Amazon Echo Dot 5th Gen que ofrece soluciones para automatizar algunas tareas en tu hogar.  '
    },
    { 
        id: '11', 
        name: 'Amazon Echo Show', 
        price: 120000, 
        category: 'domotica', 
        img:'https://www.annesullivan.ie/wp-content/uploads/2023/02/echo-show-1.webp', 
        stock: 25, 
        description:'Conoce el Echo Show 10 -Diseñado para moverse contigo. Muévete por la habitación durante las videollamadas o mientras miras un programa de televisión y la brillante pantalla HD de 10.1 se girará automáticamente hacia ti. Puede concentrarse en con quién está hablando o en lo que está mirando.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}