import React, {useState} from 'react';

import Layout from '../components/Layout';

import Projects from '../components/Projects';

import {Radio} from 'antd';


import stem from '../assets/STEM logo 318-01.png';
import velocity from '../assets/brand book-17.png';
import hcde from '../assets/HCDE pupper-01.png';
import cashflow from '../assets/Cash Flow End Credits.png';
import rise from '../assets/Rise logo-09.png';
import brownSuga from '../assets/Brown Suga King Youtube Banner Red v1.png';

// import {Button} from 'antd/es/button';
// import {Radio} from 'antd/es/radio';

const projects = [
    {title: 'STEM',
        img: stem,
        tag:'UX/UI',
        link:'',
        value:'ux/ui'},

    
    {title: 'Velocity: Rebrand',
        img: velocity,
        tag:'Graphic Design | Branding',
        link:'',
        value:'graphics'},


    {title: 'HCDE Logo',
        img: hcde,
        tag:'Graphic Design | Branding',
        link:'',
        value:'graphics'},


    {title: 'Cashflow',
        img: cashflow,
        tag:'UX/UI',
        link:'',
        value:'ux/ui'},


    {title: 'Rise',
        img: rise,
        tag:'Graphic Design',
        link:'',
        value:'graphics'},
        

    {title: 'Brown Sugar King',
        img: brownSuga,
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
                    <Radio.Button style={{color: "white", backgroundColor:"#3C5F52"}} value='all' >All</Radio.Button>
                    <Radio.Button style={{color: "white", backgroundColor:"#3C5F52"}}value='ux/ui'>UX/UI</Radio.Button>
                    <Radio.Button style={{color: "white", backgroundColor:"#3C5F52"}}value='graphics'>Graphics</Radio.Button>
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