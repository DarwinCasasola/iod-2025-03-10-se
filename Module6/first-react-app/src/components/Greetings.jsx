// src/components/Greeting.jsx
function Greeting({ name = "World", children }) {
    return (
        <div className="Greeting componentBox">
            <h1>Hello {name}!</h1>
            {children}
        </div>
    );
}

export default Greeting;
