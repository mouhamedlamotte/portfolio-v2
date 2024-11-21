"use client"
import React from 'react'

export const Track = () => {

    const data = {
            visitedPage: "https://ton-portfolio.com/page-exemple",
            referrer: "https://google.com",
            language: "fr-FR",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
            deviceType: "desktop",
            os: "Windows",
            browser: "Chrome",
            ipAddress: "192.168.1.1",
            country: "Senegal",
            region: "Dakar"
      }
      

    const sendData = () => {
      fetch('https://localhost:3000/public/track/visite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'cm3n6j8wx000111m3dvlmfny5', 
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    };

    React.useEffect(() => {
      sendData();
    }, []);

  return (
   <></>
  )
}

export default Track