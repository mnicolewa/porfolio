import React from 'react';

const projects = {
    title: '',
    img:'',
    tag:'',
    link:''
}

function Projects(props) {
    return(
        <a href={props.link}>
            <div class= 'mix'>
                <img class="projectImage" src={props.img}></img>
                    <div class="wrapper">
                            <div class="text">
                                <h2>{props.title}</h2>
                                <p>{props.tag}</p>
                            </div>
                        </div>
                    </div>
                </a>
    )
}

export default Projects