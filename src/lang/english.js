import imgcoche  from '../images/coche.webp';
import imgciclomotor  from '../images/ciclomotor.webp';
import imgmoto  from '../images/motocicleta.webp';
import imgcamion  from '../images/camion.webp';



export const Navbar = {
    home: 'Home',
    about: 'About',
    licenses: 'Licenses',
    contact: 'Contact',
    lang: 'Lang'
};

export const Home = {
    sections: [
        {
            title: "Driving school in Mijas",
            contactBtn: "Contact us!"
        },
        {
            title: "Choose driving school in Mijas",
            left: "Choosing a driving school is not an easy task, since there is a lot of responsibility and the decision to obtain a driving license lies in choosing well. At our driving school in Mijas, we offer the theoretical classes adapted to you, being able to choose both the time and the format of your classes. There are already many students who have passed through our classrooms and are driving today thanks to Autoescuela las Lagunas. Do you know the types of training we have?: \n \n - Theoretical classes: In general, the theoretical classes at our driving school in Mijas, have a schedule from Monday to Friday from 10:30 to 13:30 and 17:00 to 9:00 p.m.",
            right: "Also if you want to go to the exam and self-evaluate yourself, you can have our test platform that will also help you to consolidate all the knowledge acquired. The tests that you can do both face-to-face and virtual are similar to those offered by the DGT, and will make you more prepared for the day you appear for the final exam. \n \n - Intensive courses: If you have little time or want to get the theory as soon as possible, it is best to take an intensive course. At our driving school in Mjas we have intensive courses in Mijas. If you want more information on when and for how much the new intensive will be released, call us."
        },
        {
            address: { label: 'Address', content: 'C/Río Aguas, nº6, Local 1. 29651 Las Lagunas de Mijas, Málaga' },
            phone: { label: 'Phone Number', content: '+34 652 32 68 08' },
            email: { label: 'Email', content: 'aelaslagunas@gmail.com' },
            schedule: { label: 'Schedule', content: 'M-F 10:00 - 13:00 and 17:30 - 21:00 \n Saturday 10:00 - 13:00 and 17:30 - 21:00 \n Sunday closed'}
        }
    ]
};

export const About = {
    sections: [
        {
            title: "Our center",
            content: "Driving school, Road Training Center, CAP approved center."
        },
        {
            title: "About us",
            content: "We are a company dedicated to training, where the most important thing is our students. We offer you quality and good treatment, as well as our exclusive dedication so that you approve as easily and quickly as possible, at the lowest cost. \n \n We adapt to your schedules and, if you don't need, we will pick you up at your home or work. We take you to the theoretical and practical exams. In your training you will receive techniques to face exams without stress or anxiety; in addition to a special course on rational and economic driving, totally free. \n \n You can get your driving license with a manual or automatic car, you choose."
        },
        {
            title: "Why join Autoescuela Las Lagunas?",
            content: "We offer special courses for those who are afraid to drive (amaxophobia), and we give special treatment for those who have some difficulty. \n \n You will be able to take your CAP course at the time you want, including weekends or at closing time. \n \n We give you payment facilities, you can pay how and when you want. Taking out your driving license or your CAP course will be easy for you at AUTOESCUELA LAS LAGUNAS."
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
}