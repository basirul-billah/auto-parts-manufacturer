import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Partner from './Partner';

const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('partner-logo.json')
            .then(res => res.json())
            .then(data => setPartners(data))
    }, [])

    return (
        <section className='mt-10'>
            {/* partners section  */}
            <div className="grid grid-cols-10 gap-5 justify-items-center grid-flow-col-dense overflow-hidden overflow-x-auto">
                {
                    partners.slice(0, 10).map(partner => <Partner
                        key={partner.id}
                        partner={partner.image}
                    ></Partner>)
                }
            </div>
        </section>
    );
};

export default Partners;