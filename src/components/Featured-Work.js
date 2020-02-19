import React from 'react'

const project = {
    title: '',
    synopsis:'',
    img:'',
}

function Featured(props) {
 return (
    <div class="featured-work">
        <div class="work-container">
            <div class="workbox">
                    <div class="accent first"></div>
                <div class="project one">
                    <div class="image">{props.img}</div>
                <div class="textbox">
                    <h3>{props.title}</h3>
                    <p>{props.synopsis}</p>
                </div>
            </div>
        </div>
     </div>
    </div>
 );
}

export default Featured