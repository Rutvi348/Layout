function Testfifth() {
    return (
        <>
            <div>
                <div style={{ backgroundColor: 'black', color: 'white' }}>
                    <h1 style={{ fontSize: '50PX', textAlign: 'center' }}>Contact us</h1>

                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
                        <div>
                            <h1>Contact Us</h1>
                            <div style={{ display: "flex", gap: '30px' }}>
                                <div>
                                    <label style={{ fontSize: '20PX' }} for="name">First Name:</label>
                                    <div>
                                        <input style={{ height: '50px', width: '300px', border: 'none', backgroundColor: 'darkgray' }} type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: '20PX' }} for="name">Last Name:</label>
                                    <div>
                                        <input style={{ height: '50px', width: '300px', border: 'none', backgroundColor: 'darkgray' }} type="text" />
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <label style={{ fontSize: '20PX' }}>Email Address:</label>
                                <div>
                                    <input style={{ height: '50px', width: '650px', border: 'none', backgroundColor: 'darkgray' }} type="email" />
                                </div>
                            </div>

                            <div>
                                <label style={{ fontSize: '20PX' }}>Message:</label>
                                <div>
                                    <textArea style={{ backgroundColor: 'darkgray' }} rows="10" cols="82"></textArea>
                                </div>
                            </div>
                            <button style={{ border: 'none', marginTop: '40px', backgroundColor: 'skyblue', height: '50px', width: '200px', color: 'white', borderRadius: '20px' }}>Send Message</button>
                        </div>


                        <div style={{ marginTop: '50px' }}>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <img src="https://static.vecteezy.com/system/resources/previews/006/646/813/non_2x/house-logo-simple-design-with-white-house-on-black-background-free-vector.jpg" height="100px" width="100px" />
                                <div>
                                    <p>155 Market St #101, Paterson, NJ</p>
                                    <p>07505, United States</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '40px' }}>
                                <img src="https://static.vecteezy.com/system/resources/previews/015/720/174/original/eps10-white-phone-call-or-telephone-abstract-icon-isolated-on-black-background-contact-us-or-hotline-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-app-vector.jpg" height="100px" width="100px" />
                                <div>
                                    <p>+1 202 2020 200</p>

                                </div>
                            </div>


                            <div style={{ display: 'flex', gap: '40px' }}>
                                <img src="data:image/jpeg;base64,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" height="100px" width="100px" />
                                <div>
                                    <p>@info@mydomain.com</p>

                                </div>
                            </div>
                        </div>
                    </div>


                    <img style={{ marginTop: '80px' }} src="https://static.vecteezy.com/system/resources/previews/024/794/421/non_2x/highly-detailed-blank-world-map-illustration-with-different-colors-for-each-country-editable-and-clearly-labeled-layers-vector.jpg" height="100%" width="100%" />

                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
                        <div>
                            <h3>CONTACT</h3>
                            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                            <p>+1(123)-456-7890</p>
                            <p>+1(123)-456-7890</p>
                            <p>info@mydomain.com</p>

                        </div>

                        <div>
                            <h3>SOURCES</h3>
                            <p>
                                About us</p>
                            <p>

                                Services</p>
                            <p>Vision</p>
                            <p>Mission</p>
                            <p>Terms</p>
                            <p>Privacy</p>
                        </div>

                        <div style={{ marginTop: "40px" }}>
                            <p>Partner</p>
                            <p>Business</p>
                            <p>Career</p>
                            <p>Blog</p>
                            <p>FAQ</p>
                            <p>Creative</p>
                        </div>

                        <div>
                            <h3>LINKS</h3>
                            <p>Our Vision</p>
                            <p>About us</p>
                            <p>Contact us</p>
                            <img src="https://i.pinimg.com/736x/01/5f/a8/015fa8a502a4abf910a86c1642fe15b3.jpg" height="180px" width="350px" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Testfifth;