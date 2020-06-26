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
    title: 'What license do you want?',
    licenseCards: [
        {
            img: imgcoche,
            title: 'Car license',
            subtitle: 'License B',
            links: [
                { id: 0, name: 'More info' }
            ]
        },
        {
            img: imgciclomotor,
            title: '49cc license',
            subtitle: 'License AM',
            links: [
                { id: 1, name: 'More info' }
            ]
        },
        {
            img: imgmoto,
            title: '+125cc license',
            subtitle: 'License A1, A2 y A',
            links: [
                { id: 2, name: '125cc' },
                { id: 3, name: '500cc' },
                { id: 4, name: 'No limit' }
            ]
        },
        {
            img: imgcamion,
            title: 'Truck license',
            subtitle: 'License C',
            links: [
                { id: 5, name: 'More info' }
            ]
        }
    ],
    licenses: [
        {
            id: 0,
            title: 'Car License',
            subtitle: 'License B',
            description: 'Authorizes to drive automobiles whose maximum authorized mass does not exceed 3,500 kg that are designed and built to transport no more than eight passengers in addition to the driver. These cars may have a trailer with a maximum authorized mass not exceeding 750 kg. \n Motor tricycles and quadricycles: The minimum age to obtain it will be eighteen years of age. However, until the age of twenty-one you will not be allowed to drive motor tricycles whose maximum power exceeds 15 kW.',
            features: [
                { label: 'Minimum age', content: '18 years old' },
                { label: 'License required', content: 'None' },
                { label: 'Theoretical tests', content: 'Common theory' },
                { label: 'Practical tests', content: 'Circulation test' },
                { label: 'Vehicles that allows', content: 'Vehicles whose MMA does not exceed 3500Kg and mopeds' },
                { label: 'Licenses that validate', content: 'LCM, LVA and A1 from 3 years old' }
            ]
        },
        {
            id: 1,
            title: 'Moped License',
            subtitle: 'License AM',
            description: 'You are authorized to drive two or three-wheel mopeds and light ATVs, although you may be limited to driving three-wheel mopeds and light ATVs. The minimum age to obtain it will be fifteen years old. However, until the age of eighteen they will not authorize the driving of the corresponding vehicles when transporting passengers.',
            features: [
                { label: 'Minimum age', content: '15 years old' },
                { label: 'License required', content: 'None' },
                { label: 'Theoretical tests', content: 'Specific AM' },
                { label: 'Practical tests', content: 'Circuit practical exam' },
                { label: 'Vehicles that allows', content: '2 or 3 wheel mopeds and light ATVs' },
                { label: 'Licenses that validate', content: 'None' }
            ]
        },
        {
            id: 2,
            title: 'Motorcycle License',
            subtitle: 'License A1',
            description: 'Authorizes to drive motorcycles with a maximum displacement of 125 cm³, a maximum power of 11 kW and a maximum power / weight ratio of 0.1 kW/kg and motor tricycles whose maximum power does not exceed 15 kW.',
            features: [
                { label: 'Minimum age', content: '16 years old' },
                { label: 'License required', content: 'None' },
                { label: 'Theoretical tests', content: 'Common and specific theory A' },
                { label: 'Practical tests', content: 'Track and circulation' },
                { label: 'Vehicles that allows', content: 'Motorcycles up to 125cc' },
                { label: 'Licenses that validate', content: 'AM' }
            ]
        },
        {
            id: 3,
            title: 'Motorcycle License',
            subtitle: 'License A2',
            description: 'Authorizes to drive motorcycles with a maximum power of 35 kW and a maximum power/weight ratio of 0.2 kW/kg and not derived from a vehicle with more than double its power.',
            features: [
                { label: 'Minimum age', content: '18 years old' },
                { label: 'License required', content: 'None' },
                { label: 'Theoretical tests', content: 'Common and specific theory A' },
                { label: 'Practical tests', content: 'Track and circulation' },
                { label: 'Vehicles that allows', content: 'Motorcycles up to 35kW of maximum power' },
                { label: 'Licenses that validate', content: 'AM, A1 and LCM' }
            ]
        },
        {
            id: 4,
            title: 'Motorcycle License',
            subtitle: 'License A',
            description: 'Authorizes to drive motorcycles and motor tricycles. The minimum age to obtain it will be twenty years of age but until the age of twenty-one will not authorize the driving of motor tricycles whose maximum power exceeds 15 kW.',
            features: [
                { label: 'Minimum age', content: '20 years old' },
                { label: 'License required', content: 'Mandatory 2 years old with A2 license' },
                { label: 'Theoretical tests', content: 'Course to be determined by the Ministry of the Interior' },
                { label: 'Practical tests', content: 'None' },
                { label: 'Vehicles that allows', content: 'Motorcycles of any displacement' },
                { label: 'Licenses that validate', content: 'AM, A1, A2 and LCM' }
            ]
        },
        {
            id: 5,
            title: 'Truck License',
            subtitle: 'License C1',
            description: 'Authorizes to drive trucks whose maximum authorized mass exceeds 3500kg and does not exceed 7500kg, designed and built to transport no more than eight passengers in addition to the driver. These cars may have a trailer with a maximum authorized mass not exceeding 750kg attached.',
            features: [
                { label: 'Minimum age', content: '18 years old' },
                { label: 'License required', content: 'License B' },
                { label: 'Theoretical tests', content: 'Specific theory' },
                { label: 'Practical tests', content: 'Track and circulation' },
                { label: 'Vehicles that allows', content: 'Automobiles whose MMA ranges from 3500Kg to 7500Kg. With trailer up to 750Kg MMA' },
                { label: 'Licenses that validate', content: 'BTP' }
            ]
        }
    ]
};


export const Contact = {
    dataCard: {
        title: 'Contact data',
        email: { label: 'Email', content: 'aelaslagunas@gmail.com' },
        phone: { label: 'Phone Number', content: '+34 657 32 58 08' },
    },
    formTexts: {
        name: { placeholder: 'Name & Surname' },
        email: { placeholder: 'Email' },
        subject: { placeholder: 'Subject' },
        message: { placeholder: 'Message' },
        submit: 'Send',
    },
    alert: 'Disabled... there is no reason to contact me here :)'
}