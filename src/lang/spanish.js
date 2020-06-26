import imgcoche  from '../images/coche.webp';
import imgciclomotor  from '../images/ciclomotor.webp';
import imgmoto  from '../images/motocicleta.webp';
import imgcamion  from '../images/camion.webp';


export const Navbar = {
    home: 'Inicio',
    about: 'Sobre nosotros',
    licenses: 'Permisos',
    contact: 'Contacto',
    lang: 'Idioma'
};


export const Home = {
    sections: [
        {
            title: "Autoescuela en Mijas",
            contactBtn: "¡Contáctanos!"
        },
        {
            title: "Elegir autoescuela en Mijas",
            left: "Elegir autoescuela no es tarea fácil, ya que hay mucha responsabilidad y la decisión de obtener el permiso de conducir se haya en elegir bien. En nuestra autoescuela en Mijas, te ofrecemos las clases teóricas adaptadas a ti, pudiendo elegir tanto el horario como el formato de tus clases. Ya son muchos los alumnos que han pasado por nuestras aulas y conducen a día de hoy gracias a Autoescuela las Lagunas. ¿Conoces los tipos de formaciones que tenemos?: \n\n – Clases teóricas: Por lo general las clases teóricas en nuestra autoescuela en Mijas, tienen un horario de lunes a viernes de 10:30 a 13:30 y 17:00 a 21:00 horas.",
            right: "Además si quieres ir tranquilo al examen y autoevaluarte, puedes disponer de nuestra plataforma de tipo test que te ayudará además a afianzar todos los conocimientos adquiridos. Los test que puedes hacer tanto de forma presencial como virtual son similares a los que ofrece la DGT, y te harán estar más preparado para el día que te presentes al examen final. \n\n – Cursos intensivos: Si tienes poco tiempo o quieres obtener el teórico cuanto antes, lo mejor es hacer un curso intensivo. En nuestra autoescuela en Mjas contamos con cursos intensivos en Mijas. Si quieres más información de cuándo y por cuánto saldrá el nuevo intensivo, llámanos."
        },
        {
            address: { label: 'Dirección', content: 'Calle Río Aguas, nº6, Local 1. 29651 Las Lagunas de Mijas, Málaga' },
            phone: { label: 'Teléfono', content: '657 32 58 08' },
            email: { label: 'Email', content: 'aelaslagunas@gmail.com' },
            schedule: { label: 'Horario', content: 'De lunes a viernes de 10:00 a 13:00 y de 17:30 a 21:00 \n Sábados de 10:00 a 13:00 y de 17:30 a 21:00 \n Domingos cerrado'}
        }
    ]
};


export const About = {
    sections: [
        {
            title: "Nuestro centro",
            content: "Autoescuela, Centro de Formación Vial, Centro homologado CAP."
        },
        {
            title: "Quiénes Somos",
            content: "Somos una empresa dedicada a la formación, donde lo más importante son nuestros alumnos. Te ofrecemos calidad y un buen trato, así como nuestra exclusiva dedicación para que apruebes lo más fácil y rápido posible, al menor coste. \n \n Nos adaptamos a tus horarios y, si no necesitas te recogemos en tu domicilio o trabajo. Te llevamos a los exámenes teórico y práctico. En tu formación recibirás técnicas para afrontar los exámanes sin estrés, ni ansiedad; además de un curso especial de conducción racional y económica, totalmente gratuito. \n \n Podrás obtener tu permiso de conducir con coche manual o automático, tú eliges."
        },
        {
            title: "¿Por qué apuntarte en Autoescuela Las Lagunas?",
            content: "Impartimos cursos especiales para aquellas personas que tienen miedo a conducir (amaxofobia), y damos un trato especial para los que tienen alguna dificultad. \n \n Podrás hacer tu curso CAP en el horario que quieras, incluídos los fines de semana o en horario de cierre. \n \n Te damos facilidades de pago, podrás pagar cómo y cuándo quieras. Sacarte tu permiso de conducir o tu curso CAP te resultará fácil en AUTOESCUELA LAS LAGUNAS."
        }
    ]
};


export const Licenses = {
    title: '¿Qué permiso quieres?',
    licenseCards: [
        {
            img: imgcoche,
            title: 'Carnet de coche',
            subtitle: 'Permiso B',
            links: [
                { id: 0, name: 'Más info' }
            ]
        },
        {
            img: imgciclomotor,
            title: 'Carnet de 49cc',
            subtitle: 'Permiso AM',
            links: [
                { id: 1, name: 'Más info' }
            ]
        },
        {
            img: imgmoto,
            title: 'Carnet de +125cc',
            subtitle: 'Permisos A1, A2 y A',
            links: [
                { id: 2, name: '125cc' },
                { id: 3, name: '500cc' },
                { id: 4, name: 'Sin límite' }
            ]
        },
        {
            img: imgcamion,
            title: 'Carnet de camión',
            subtitle: 'Permiso C',
            links: [
                { id: 5, name: 'Más info' }
            ]
        }
    ],
    licenses: [
        {
            id: 0,
            title: 'Carnet de Coche',
            subtitle: 'Permiso B',
            description: 'Autoriza para conducir automóviles cuya masa máxima autorizada no exceda de 3.500 kg que estén diseñados y construidos para el transporte de no más de ocho pasajeros además del conductor. Dichos automóviles podrán llevar enganchado un remolque cuya masa máxima autorizada no exceda de 750 kg. \n Triciclos y cuatriciclos de motor: La edad mínima para obtenerlo será de dieciocho años cumplidos. No obstante, hasta los veintiún años cumplidos no autorizará a conducir triciclos de motor cuya potencia máxima exceda de 15 kW.',
            features: [
                { label: 'Edad mínima', content: '18 años' },
                { label: 'Permiso necesario', content: 'Ninguno' },
                { label: 'Pruebas teóricas', content: 'Teórica común' },
                { label: 'Pruebas prácticas', content: 'Examen de circulación' },
                { label: 'Vehículos que permite', content: 'Automóviles cuya MMA no exceda los 3500Kg y ciclomotores' },
                { label: 'Convalida', content: 'LCM, LVA y A1 a partir de los 3 años de antigüedad' }
            ]
        },
        {
            id: 1,
            title: 'Carnet de Ciclomotor',
            subtitle: 'Permiso AM',
            description: 'Autoriza para conducir ciclomotores de dos o tres ruedas y cuatriciclos ligeros, aunque podrá estar limitado a la conducción de ciclomotores de tres ruedas y cuatriciclos ligeros. La edad mínima para obtenerlo será de quince años cumplidos. No obstante, hasta los dieciocho años cumplidos no autorizará a conducir los correspondientes vehículos cuando transporten pasajeros.',
            features: [
                { label: 'Edad mínima', content: '15 años' },
                { label: 'Permiso necesario', content: 'Ninguno' },
                { label: 'Pruebas teóricas', content: 'Específico AM' },
                { label: 'Pruebas prácticas', content: 'Examen práctico de pista' },
                { label: 'Vehículos que permite', content: 'Ciclomotores de 2 o 3 ruedas y cuatriciclos ligeros' },
                { label: 'Convalida', content: 'Ninguno' }
            ]
        },
        {
            id: 2,
            title: 'Carnet de Moto',
            subtitle: 'Permiso A1',
            description: 'Autoriza para conducir motocicletas con una cilindrada máxima de 125 cm³, una potencia máxima de 11 kW y una relación potencia/peso máxima de 0,1 kW/kg y triciclos de motor cuya potencia máxima no exceda de 15 kW.',
            features: [
                { label: 'Edad mínima', content: '16 años' },
                { label: 'Permiso necesario', content: 'Ninguno' },
                { label: 'Pruebas teóricas', content: 'Teórica común y específico A' },
                { label: 'Pruebas prácticas', content: 'Pista y circulación' },
                { label: 'Vehículos que permite', content: 'Motocicletas de hasta 125cc' },
                { label: 'Convalida', content: 'AM' }
            ]
        },
        {
            id: 3,
            title: 'Carnet de Moto',
            subtitle: 'Permiso A2',
            description: 'Autoriza para conducir motocicletas con una potencia máxima de 35 kW y una relación potencia/peso máxima de 0,2 kW/kg y no derivadas de un vehículo con más del doble de su potencia.',
            features: [
                { label: 'Edad mínima', content: '18 años' },
                { label: 'Permiso necesario', content: 'Ninguno' },
                { label: 'Pruebas teóricas', content: 'Teórica común y específico A' },
                { label: 'Pruebas prácticas', content: 'Pista y circulación' },
                { label: 'Vehículos que permite', content: 'Motocicletas de hasta 35kW de potencia máxima' },
                { label: 'Convalida', content: 'AM, A1 y LCM' }
            ]
        },
        {
            id: 4,
            title: 'Carnet de Moto',
            subtitle: 'Permiso A',
            description: 'Autoriza para conducir motocicletas y triciclos de motor. La edad mínima para obtenerlo será de veinte años cumplidos pero hasta los veintiún años cumplidos no autorizará a conducir triciclos de motor cuya potencia máxima exceda de 15 kW.',
            features: [
                { label: 'Edad mínima', content: '20 años' },
                { label: 'Permiso necesario', content: 'Obligatorio 2 años de antigüedad con el permiso A2' },
                { label: 'Pruebas teóricas', content: 'Curso a determinar por el Ministerio de Interior' },
                { label: 'Pruebas prácticas', content: 'Exento' },
                { label: 'Vehículos que permite', content: 'Motocicletas de cualquier cilindrada' },
                { label: 'Convalida', content: 'AM, A1, A2 y LCM' }
            ]
        },
        {
            id: 5,
            title: 'Carnet de Camión',
            subtitle: 'Permiso C1',
            description: 'Autoriza para conducir camiones cuya masa máxima autorizada exceda de 3500kg y no sobrepase los 7500kg, diseñados y construidos para el transporte de no más de ocho pasajeros además del conductor. Dichos automóviles podrán llevar enganchado un remolque cuya masa máxima autorizada no exceda de 750kg.',
            features: [
                { label: 'Edad mínima', content: '18 años' },
                { label: 'Permiso necesario', content: 'Permiso B' },
                { label: 'Pruebas teóricas', content: 'Teórica específica' },
                { label: 'Pruebas prácticas', content: 'Pista y circulación' },
                { label: 'Vehículos que permite', content: 'Automóviles cuya MMA vaya de 3500Kg a 7500Kg. Con remolque hasta de 750Kg de MMA' },
                { label: 'Convalida', content: 'BTP' }
            ]
        },
    ]
};


export const Contact = {
    dataCard: {
        title: 'Datos de contacto',
        email: { label: 'Email', content: 'aelaslagunas@gmail.com' },
        phone: { label: 'Teléfono', content: '657 32 58 08' },
    },
    formTexts: {
        name: { placeholder: 'Nombre y Apellidos' },
        email: { placeholder: 'Correo Electrónico' },
        subject: { placeholder: 'Asunto' },
        message: { placeholder: 'Mensaje' },
        submit: 'Enviar',
    },
    alert: 'Deshabilitado, para que no me petes el correo :)'
}