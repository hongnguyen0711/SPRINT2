export function Login() {
    return (
        <>
            <div className="vid-container">
                <video id="Video1" className="bgvid back" autoPlay="true" muted="muted" preload="auto" loop>
                    <source src="https://v.ftcdn.net/04/96/35/47/700_F_496354797_I8GKDBiAfTDOoSWglhgD779AzSDlZRcG_ST.mp4" type="video/mp4"/>
                </video>
                <div className="inner-container">
                    <div className="box">
                        <h1>Login</h1>
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Password"/>
                        <button>Login</button>
                        <p>Not a member? <span className="signup">Sign Up</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
