import axios from 'axios'




  const headers={
    'X-RapidAPI-Key': '0aa8991588msh298ffca364ebd56p1972a4jsn4d14adcec561',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  }



  const options = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    params: {base64_encoded: 'true', fields: '*'},
    headers: {
      'X-RapidAPI-Key': '0aa8991588msh298ffca364ebd56p1972a4jsn4d14adcec561',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    },
    data: '{"language_id":52,"source_code":"I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=","stdin":"SnVkZ2Uw"}'
  };
  


const getLanguages=()=>axios.get("https://judge0-ce.p.rapidapi.com/languages",{headers})

export {getLanguages}