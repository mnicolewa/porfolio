import React from 'react';

import Layout from '../components/Layout';
import Featured from '../components/Featured-Work'

const featured=[
    {title:'hi',
     img:'https://via.placeholder.com/150',
     synopsis:'blurb here'},

    {title:'hello',
     img:'https://via.placeholder.com/150',
     synopsis:'blurb here'},
     
    {title:'asdf',
     img:'https://via.placeholder.com/150',
     synopsis:'blurb here'}
]

function IndexPage() {
    return (
        <Layout>
            <h2 class="heading2">featured work</h2>
            {featured.map((f,i)=>
                <Featured {...f} key={i}/>
            )}
         </Layout>
    );
}

export default IndexPage