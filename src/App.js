
// Component  

import './App.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  // const navigate = useNavigate();

  return (
    <>
      <div style={{ backgroundColor: "black", color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px' }}>
          <h1>Solicitor</h1>

          <div>
            <button style={{ border: "none", height: "40px", width: "150px", backgroundColor: "black", color: 'white' }} onClick={() => navigate('/testfirst')}>Home</button>
            <button style={{ border: "none", height: "40px", width: "150px", backgroundColor: "black", color: 'white', marginLeft: "20px" }} onClick={() => navigate('/secondtest')} >Practicing-area</button>
            <button style={{ border: "none", height: "40px", width: "150px", backgroundColor: "black", color: 'white', marginLeft: "20px" }} onClick={() => navigate('/thirdtest')}>Services</button>
            <button style={{ border: "none", height: "40px", width: "150px", backgroundColor: "black", color: 'white', marginLeft: "20px" }} onClick={() => navigate('/fourthtest')}>About</button>
            <button style={{ border: "none", height: "40px", width: "150px", backgroundColor: "black", color: 'white', marginLeft: "20px" }} onClick={() => navigate('/fifthtest')}>Contact Us</button>
          </div>

          <div style={{ display: "flex" }}>
            <img src='https://static-00.iconduck.com/assets.00/call-icon-2048x2048-9fglrllu.png' height='40px' width='40px' />
            <p>123-489-9381</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', gap: "150px", marginTop: '40px' }}>
          <div style={{ marginLeft: '100px' }}>
            <h1>Peace & order</h1>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

            </p>
            <button style={{ backgroundColor: 'skyblue', border: 'none', height: '60px', width: '200px', color: 'white', borderRadius: '10px' }} >Read More</button>
          </div>

          <div style={{ marginRight: '100px' }}>
            <img style={{ borderRadius: '20PX' }} src="https://preview.colorlib.com/theme/solicitor/images/hero_2.jpg" height="500px" width="900px" />
          </div>
        </div>

        <div style={{ backgroundColor: 'black', color: 'white' }}>
          <h1 style={{ fontSize: '70px', marginLeft: '100px' }}>Services we offer</h1>

          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '100px', marginLeft: '200px', marginRight: '200px' }}>
            <div>
              <img src="https://cdn.widexpro.com/-/media/widex/global/images/blog/2023/widex-blog_real-world-data_1920x1080.jpg?w=720&rev=dbc99efb83224fd0873219cf84c59fb0&extension=webp&hash=66D9B5B20ABC4D21D340833EFEE98A26"
                height="80px" width="140px" />
              <h1>Councel</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div>
              <img src="https://w0.peakpx.com/wallpaper/700/293/HD-wallpaper-podcast-energy-honor-iamchiragrao-letter-logo-monster.jpg"
                height="100px" width="140px" />
              <h1>Legal Dept</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>

            <div>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8SkiKndyXX_yGi2vOQAJsoJQ3qWdVa59EExqkPwrZEZZnBdVJ"
                height="100px" width="140px" />
              <h1>Compliance</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '100px', marginLeft: '200px', marginRight: '200px', marginTop: '70px' }}>
            <div>
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSppjMUb3ZmnrxALK--HGEIz7K1tAtuejyjygnSboDymcEk9DX"
                height="80px" width="140px" />
              <h1>Identity</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-L06AhOfzu1Wd3nrPHS4NrSCUSxIeEwNU4ddGYmOcHh8cN1mm"
                height="100px" width="140px" />
              <h1>Hall of Justice</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>

            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4u7jbFr1Pn4VlHYxmGDc_BY-c5CgWYOMAzdhqd-U61R53ZRV"
                height="100px" width="140px" />
              <h1>Law Abiding</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>

          </div>
        </div>

        <h1 style={{ fontSize: "60px", marginLeft: '100px' }}>Testimonials</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '' }}>
          <div style={{}}>
            <div style={{ display: 'flex', gap: '30px' }}>
              <img style={{ borderRadius: '50%' }} src="https://img.etimg.com/photo/100730158/100730158.jpg" height="90px" width="90px" />
              <div>
                <h3>Angela Smith</h3>
                <h3>CEO ,Co-Founder</h3>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px' }}>
              <img style={{ borderRadius: '50%' }} src="https://images.ctfassets.net/lzny33ho1g45/5ZchzmGHt9O5EzkedF6Uwp/9558405fe1bb07598e06360353d3b175/Interviewer_at_work_hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" height="90px" width="90px" />
              <div>
                <h3>Joshnu Hamilkllo</h3>
                <h3>Web Design</h3>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px' }}>
              <img style={{ borderRadius: '50%' }} src="https://s31345.pcdn.co/wp-content/uploads/What-are-the-best-questions-to-ask-in-an-interview-1024x682.jpg.optimal.jpg" height="90px" width="90px" />
              <div>
                <h3>Janice Bruce</h3>
                <h3>Web Design</h3>
              </div>
            </div>
          </div>

          <div style={{ height: '800px', width: '900px', fontSize: "40PX" }}>
            <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
            <p>— Angela Smith</p>
            <p>CEO, Co-Founder</p>
          </div>

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

        <div style={{ backgroundColor: 'black', color: "white" }}>
          <h1 style={{ fontSize: '70px' }}>Precticing Area</h1>

          <div style={{ display: "flex", justifyContent: 'space-around' }}>
            <div>
              <div style={{ backgroundColor: "gray", color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>
                Assets searches
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: "gray", color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>
                Background Investigation
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: 'gray', color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>Business due Deligence</div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: 'space-around', marginTop: '30px' }}>
            <div>
              <div style={{ backgroundColor: "gray", color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>
                Civil Investigation
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: "gray", color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>
                Criminal Defence Investigation
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: 'gray', color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>Assets Search</div>
            </div>
          </div>


          <div style={{ display: "flex", justifyContent: 'space-around', marginTop: '30px' }}>
            <div>
              <div style={{ backgroundColor: "gray", color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>
                Background Investigation
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: "gray", color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>
                Business Due Diligence
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: 'gray', color: "white", padding: "40px", height: "200px", width: "400px", textAlign: "center" }}>Civil Investigation</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', gap: "150px", marginTop: '40px' }}>
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

        </div>
      </div>

    </>
  );
}

export default App;
