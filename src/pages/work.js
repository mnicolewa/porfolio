import React, {useState} from 'react';

import Layout from '../components/Layout';

import Projects from '../components/Projects';

import {Radio} from 'antd';

// import {Button} from 'antd/es/button';
// import {Radio} from 'antd/es/radio';

const projects = [
    {title: 'STEM',
        img:'https://via.placeholder.com/150',
        tag:'UX/UI',
        link:'',
        value:'ux/ui'},

    
    {title: 'Velocity: Rebrand',
        img:'https://via.placeholder.com/150',
        tag:'Graphic Design | Branding',
        link:'',
        value:'graphics'},


    {title: 'HCDE Logo',
        img:'https://via.placeholder.com/150',
        tag:'Graphic Design | Branding',
        link:'',
        value:'graphics'},


    {title: 'Cashflow',
        img:'https://via.placeholder.com/150',
        tag:'UX/UI',
        link:'',
        value:'ux/ui'},


    {title: 'Rise',
        img:'https://via.placeholder.com/150',
        tag:'Graphic Design',
        link:'',
        value:'graphics'},
        

    {title: 'Brown Sugar King',
        img:'https://via.placeholder.com/150',
        tag:'Graphic Design | Branding',
        link:'',
        value:'graphics'},

]

function WorkPage() {
    const [value,setValue]=useState('')
    let projectsShown
    if (value === 'all' || value === ''){
        projectsShown = projects
    }
    else {
        projectsShown=projects.filter((p)=>p.value.includes(value))
    }

    return (
        <Layout>
            <div className='UI'>
                <Radio.Group onChange={e=>setValue(e.target.value)} size='large' >
                    <Radio.Button value='all' >All</Radio.Button>
                    <Radio.Button value='ux/ui'>UX/UI</Radio.Button>
                    <Radio.Button value='graphics'>Graphics</Radio.Button>
                </Radio.Group>
                <div class="line"></div>
            </div>
            <div className='container'>
            {projectsShown.map((p,i)=>
                <Projects {...p} key={i}/>
            )}
            </div>
        </Layout>
    );
}

export default WorkPage