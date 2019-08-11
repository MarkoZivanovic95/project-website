import React from 'react';
import './ContactUs.css'
import Discord from '../../images/Discord.svg'

const ContactUs=()=>(
    <div className='contactUs'>
        <div className='container'>
            <h2 className='text-center'>Contact Us</h2>
            <div className='row'>
                <div className='col-md-8 col-sm-12'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in 
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in 
                    </p>
                    <div className='group'>
                        <h3>Join our community</h3>
                        <div id="crossfade">
                            <div className='contactusbg' style={{backgroundImage:`url(http://i.imgur.com/HwXnare.jpg)`}}></div>
                            <div className='contactusbg' style={{backgroundImage:`url(https://i.kinja-img.com/gawker-media/image/upload/s--u90IHt5f--/c_scale,f_auto,fl_progressive,q_80,w_800/bpu8deswufsad2flw7b7.jpg)`}}></div>
                            <div className='contactusbg' style={{backgroundImage:`url(https://static.planetminecraft.com/files/resource_media/screenshot/1423/aokjd.jpg)`}}></div>
                            <div className='contactusbg' style={{backgroundImage:`url(https://c-5uwzmx78pmca09x24abibqkx2eoiumax78wbx2ekwu.g00.gamespot.com/g00/3_c-5eee.oiumax78wb.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2fabibqk.oiumax78wb.kwux2fcx78twilax2fakitm_acx78mzx2f901x2f9017991x2f0386100-nnfqd9.rx78ox3fq98k.uizsx3dquiom_$/$/$/$/$/$)`}}></div>
                            {/* <img src="http://farm6.staticflickr.com/5145/5576437826_940f2db110.jpg" alt="Image 1"/>
                            <img src="http://farm4.staticflickr.com/3611/3463265789_586ce40aef.jpg" alt="Image 2"/>
                            <img src="http://farm6.staticflickr.com/5263/5601183065_f88a48d599.jpg" alt="Image 3"/>
                            <img src="http://farm2.staticflickr.com/1415/983021323_8eb2f92c01.jpg" alt="Image 1"/> */}
                        </div>                       
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className='discord row'>
                        <div className='col-6' style={{margin:'auto 0'}}>
                            <img src={Discord} alt='discord' style={{height:'inherit'}}></img>
                        </div>
                        <div className='col-6' style={{margin:'auto 0'}}>
                            <button onClick={()=> window.open(`https://discord.gg/JcAnEc5`, "_blank")}>Join</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ContactUs;