function Testfourth() {
    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'white' }}>
                <h1 style={{ textAlign: 'center', fontSize: '50PX' }}>About us</h1>

                <div style={
                    { display: 'flex', justifyContent: 'space-around', marginLeft: '150px', gap: '200px', marginTop: '100px', marginRight: '150px' }
                }>
                    <div>
                        <h1 style={{ fontSize: '50px' }}>I'm Jon Campbell</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <button style={{ border: 'none', backgroundColor: 'skyblue', height: '50px', width: '200px', color: 'white', borderRadius: '20px' }}>OUR SERVICES</button>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/solicitor/images/about_2.png" height='800px' width='700px' />
                    </div>
                </div>


                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
                    <h4>Investigation Service</h4>
                    <h4>Security Consultion</h4>
                    <h4>Criminal desfences</h4>
                </div>

                <div style={{ border: "1px solid white" }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '150px' }}>
                    <div>
                        <h1>Investigative Services</h1>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <button style={{ border: 'none', backgroundColor: 'skyblue', height: '50px', width: '200px', color: 'white', borderRadius: '20px' }}>Read More</button>
                    </div>
                    <img src="https://preview.colorlib.com/theme/solicitor/images/hero_1.jpg"
                        height='600px' width='1100px' />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', gap: "150px", marginTop: '300px' }}>
                    <div style={{ marginLeft: '100px' }}>
                        <h1 style={{}}>Peace & order</h1>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

                        </p>
                        <button style={{ backgroundColor: 'skyblue', border: 'none', height: '60px', width: '200px', color: 'white', borderRadius: '10px' }} >Read More</button>
                    </div>

                    <div style={{ marginRight: '100px' }}>
                        <img style={{ borderRadius: '20PX' }} src="https://preview.colorlib.com/theme/solicitor/images/hero_2.jpg" height="500px" width="900px" />
                    </div>
                </div>

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


            </div >

        </>
    );
};
export default Testfourth;