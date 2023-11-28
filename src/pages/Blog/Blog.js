import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                <h1>what is cors?</h1>
                </div>
                <div className="collapse-content">
                    <p>Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. This is useful because complex applications often reference third-party APIs and resources in their client-side code. For example, your application may use your browser to pull videos from a video platform API, use fonts from a public font library, or display weather data from a national weather database. CORS allows the client browser to check with the third-party servers if the request is authorized before any data transfers.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                   <h1> Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <div className="collapse-content">
                    <p>You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                 <h1>How does the private route work?</h1>
                </div>
                <div className="collapse-content">
                    <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                 <h1>What is Node? How does Node work?</h1>
                </div>
                <div className="collapse-content">
                    <p>Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;