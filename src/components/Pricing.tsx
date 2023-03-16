import { type } from 'os';
import React from 'react';
import Button from "bwareact/dist/components/Button";
import Link from 'next/link';

type TPricing = {
    key: string;
    name: string;
    price: string;
    listFeature: string[];
    cta: {
        text: string;
        state:
        | 'primary'
        | 'secondary'
        | 'alternative'
        | 'disabled'
        | 'loading'
    };
};

const items: TPricing[] = [
    {
        key: "gila-belajar",
        name: "GILA BELAJAR",
        price: "$280K",
        listFeature: [
            'Pro Techstack Kit',
            'iMac Pro 2021 & Display',
            '1-1 Mentoring Program',
            'Final Project Certificate',
            'Offline Course Videos',
            'Future Job Opportinity',
            'Premium Design Kit',
            'Website Builder'],
        cta: {
            text: "Take This Plan",
            state: 'primary'
        },
    },
    {
        key: "baru-mulai",
        name: "BARU MULAI",
        price: "$140K",
        listFeature: [
            'Pro Techstack Kit',
            'iMac Pro 2021 & Display',
            '1-1 Mentoring Program',
            'Offline Course Videos'],
        cta: {
            text: "Start With This Plan",
            state: 'secondary'
        },
    }
];


function Pricing() {
    return <section className='relative'>
        <div className='bg-[#4D1ADB] absolute inset-0 max-h-[597px] z-10'></div>
        <div className="container mx-auto px-4 pt-16 relative z-20">
            <div className="flex flex-col md:flex-row justify-center gap-y-20 md:gap-y-0 gap-x-0 md:gap-x-4 xl:gap-x-8">
                <div className='w-full md:w-4/12 2xl:w-3/12 md:mt-20'>
                    <h3 className='text-green uppercase font-semibold mb-3'>
                        GOOD INVESTMENT
                    </h3>
                    <h2 className='text-white font-semibold text-[30px] mb-5'>
                        Start Your Journey
                    </h2>
                    <p className='text-[#CBB0FF] leading-8 mb-8'>
                        We do have a couple of plans that might fit for you. Kindly download our full syallbus below.
                    </p>
                    <Button state='alternative' className='bg-green text-white'>
                        <Link legacyBehavior href="#about">
                            <a>View Syllabus</a>
                        </Link>
                    </Button>
                </div>

                {
                    items.map(pricing =>
                        <div key={pricing.key} className='w-full md:w-4/12 2xl:w-3/12'>
                            <div className='bg-white flex flex-col rounded-[40px] px-5 py-8 border border-[#EAE8F5]'>
                                <h2 className='text-green text-center uppercase font-semibold mb-2'>
                                    {pricing.name}
                                </h2>
                                <h3 className='text-navy text-center font-semibold text-[42px] mb-5'>
                                    {pricing.price}
                                </h3>
                                <ul className='flex flex-col gap-y-5 mb-8'>
                                    {
                                        pricing.listFeature.map(feature => (
                                            <li
                                                className='flex items-center gap-x-2 pb-4 border-b border-gray-100' key={feature}>
                                                <span className='w-5 h-5 p-1 bg-green rounded-full flex items-center justify-center'>
                                                    <svg
                                                        viewBox="0 0 12 8"
                                                        fill="none"
                                                        preserveAspectRatio="xMidYMid meet"
                                                    >
                                                        <path
                                                            d="M1.83325 4L4.46483 6.5L10.1666 1.5"
                                                            className="stroke-white"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                </ul>
                                <Button
                                    state={pricing.cta.state}
                                    className='text-center justify-center'>
                                    <Link href="/register">
                                        <a>{pricing.cta.text}</a>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
}

export default Pricing