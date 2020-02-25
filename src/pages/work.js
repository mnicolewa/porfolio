import React from 'react';

import Layout from '../components/Layout';

import Projects from '../components/Projects';

import {Button, Radio} from 'antd';
// import {Button} from 'antd/es/button';
// import {Radio} from 'antd/es/radio';

const projects = [
    {title: 'STEM',
        img:'https://via.placeholder.com/150',
        tag:'UX/UI',
        link:''},
    
    {title: 'Velocity: Rebrand',
        img:'https://via.placeholder.com/150',
        tag:'Graphic Design | Branding',
        link:''},

    {title: 'HCDE Logo',
        img:'https://via.placeholder.com/150',
        tag:'Graphic Design | Branding',
        link:''},

    {title: 'Cashflow',
        img:'https://via.placeholder.com/150',
        tag:'UX/UI',
        link:''},

    {title: 'Rise',
        img:'https://via.placeholder.com/150',
        tag:'Graphic Design',
        link:''},

    {title: 'Brown Sugar King',
        img:'https://via.placeholder.com/150',
        tag:'Graphic Design | Branding',
        link:''},

]

function WorkPage() {
    return (
        <Layout>
            <div className='UI'>
                <Radio.Group size='large'>
                    <Radio.Button >All</Radio.Button>
                    <Radio.Button value='ux/ui'>UX/UI</Radio.Button>
                    <Radio.Button value='graphics'>Graphics</Radio.Button>
                </Radio.Group>
                <div class="line"></div>
            </div>
            <div className='container'>
            {projects.map((p,i)=>
                <Projects {...p} key={i}/>
            )}
            </div>
        </Layout>
    );
}

export default WorkPage