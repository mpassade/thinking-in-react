import React from 'react'

const Body = () => {
    return (
        <div className='body'>
            <img 
                src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/E0F0/production/_112548575_gettyimages-492611032-1.jpg'
                className='body-img'
            />
            <h1>Lion</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu mi bibendum. Ipsum nunc aliquet bibendum enim. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Id cursus metus aliquam eleifend mi in nulla.
            </p>
            <div className='body-squares'>
                <div className='body-sq sq1'>
                    <span>Square 1</span>
                </div>
                <div className='body-sq sq2'>
                    <span>Square 2</span>
                </div>
                <div className='body-sq sq3'>
                    <span>Square 3</span>
                </div>
            </div>
        </div>
    )
}

export default Body