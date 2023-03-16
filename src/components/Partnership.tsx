import React from 'react';

import Partner1 from 'assets/images/partner-1.svg';
import Partner2 from 'assets/images/partner-2.svg';
import Partner3 from 'assets/images/partner-3.svg';
import Partner4 from 'assets/images/partner-4.svg';
import Partner5 from 'assets/images/partner-5.svg';

type Props = {}

function Partnership({ }: Props) {
    return <section className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-y-0 gap-x-6 xl:gap-x-12'>
            <div className='w-auto'><Partner1 /></div>
            <div className='w-auto'><Partner2 /></div>
            <div className='w-auto'><Partner3 /></div>
            <div className='w-auto'><Partner4 /></div>
            <div className='w-auto'><Partner5 /></div>
        </div>
    </section>;
}

export default Partnership;