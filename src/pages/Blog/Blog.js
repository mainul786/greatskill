import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                <h1>what is cors?</h1>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                   <h1> Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                 <h1>How does the private route work?</h1>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                 <h1>What is Node? How does Node work?</h1>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;