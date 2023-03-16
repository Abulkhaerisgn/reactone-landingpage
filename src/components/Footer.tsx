import React from 'react'

import Image from "next/image";

type Props = {};

const testimonials = [
    {
        key: "fany",
        user: {
            name: "Fany",
            occupancy: "Student",
            image: "/images/fany.jpg",
        },
        stars: 5,
        content: "I was not really into code but after they teach me how to train my logic then I was really fall in love with code",
    },
    {
        key: "angga",
        user: {
            name: "Angga",
            occupancy: "CEO at BWA Corp",
            image: "/images/angga.jpg",
        },
        stars: 5,
        content: "Code is really important if we want to build a company and strike to the win",
    },
    {
        key: "jully",
        user: {
            name: "Jully",
            occupancy: "Student",
            image: "/images/jully.jpg",
        },
        stars: 5,
        content: "My background is design and art but I do really love how to make my design working in the development phase",
    },
];

function Footer({ }: Props) {
    return (<section className='container mx-auto px-4 bg-[#F7F7F8] pt-16'>
        <div className="flex flex-col justify-center items-center mb-4">
            <h3 className='text-green uppercase font-semibold mb-2'>
                SUCCESS STUDENTS
            </h3>
            <h2 className='text-navy font-semibold text-[30px] mb-10'>
                We Really Love Laracamp
            </h2>
        </div>

        <div className="flex justify-center flex-wrap mx-0 xl:-mx-5 mb-12">
            {
                testimonials.map((item) => {
                    const stars = [];
                    for (let index = 0; index < item.stars; index++) {
                        stars.push(
                            <li className="" key={`${item.key}-${index}`}>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.811254 7.23295L4.81454 6.42162C5.09179 6.36543 5.33226 6.19445 5.47639 5.95104L8.13953 1.45328C8.52678 0.799266 9.47324 0.799266 9.86049 1.45328L12.5236 5.95104C12.6678
                                    6.19445 12.9082 6.36543 13.1855 6.42162L17.1888 7.23295C17.9675 7.39077 18.26 8.3499 17.7019 8.91543L14.3718 12.2899C14.1392 12.5256 14.0384 12.8611 14.1025 13.186L14.8527 16.987C15.0141
                                    17.8046 14.1631 18.4493 13.4197 18.0726L9.45197 16.0624C9.16786 15.9184 8.83216 15.9184 8.54805 16.0624L4.58036 18.0727C3.8369 18.4493 2.98594 17.8046 3.14732 16.987L3.89752 13.186C3.96163
                                    12.8611 3.86079 12.5256 3.62822 12.2899L0.298107 8.91543C-0.259985 8.3499 0.0325444 7.39077 0.811254 7.23295Z" className='fill-yellow-star' />
                                </svg>
                            </li>
                        );
                    }
                    return <div className="px-4 w-full xl:w-3/12 pb-4" key={item.key}>
                        <div className="bg-white rounded-xl p-5 flex flex-col h-full relative pb-24">
                            <ul className='flex gap-x-2 mb-5'>{stars}</ul>
                            <p className=' text-grey'>{item.content}</p>
                            <div className="absolute w-full left-4 right-0 bottom-4 flex gap-x-3">
                                <div className="w-14 h-14 relative rounded-full overflow-hidden">
                                    <Image src={item.user.image}
                                        layout="fill"
                                        alt=''
                                        className="object-cover" />
                                </div>
                                <div className='flex flex-col'>
                                    <h6 className='text-navy font-medium text-lg'>
                                        {item.user.name}
                                    </h6>
                                    <span className='text-grey'>{item.user.occupancy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <footer className='text-center text-grey pb-12'>
            All Rights Reserved. Copyright Abulkhaerisgn.
        </footer>
    </section>
    );
}

export default Footer;