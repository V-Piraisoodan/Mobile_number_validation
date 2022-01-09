document.getElementById("btn").addEventListener("click",verify);

async function verify () {
    try {
      let phone_num = document.getElementById("phone").value;
      let number = +91 +phone_num
      document.getElementById("phone").value = "";
      const res = await fetch ( `https://phonevalidation.abstractapi.com/v1/?api_key=f89c4ae654344fe4baf7d409961887b3&phone=${number}` );

      console.log(res)
      
      const data = await res.json();
      console.log(data);


      // check valid
      let val = data.valid;
     
      if(val === true){ 
        document.getElementById("valid").innerHTML = `Valid : ✅ ${val}`;
        }

      else if(val === false && data.type === "" && data.phone=== "91" ){
        document.getElementById("valid").innerHTML = `Valid : ${""}`;
        alert("Please Enter your Mobile number")
      }

      
      else{
        document.getElementById("valid").innerHTML = `Valid : ❌ ${val}, Invalid mobile number`;
      }

      // country code data
      let country_code = data.country.code;
      document.getElementById("country_code").innerHTML = `Country code : ${country_code}`;

      // country name data
      let country = data.country.name;
      document.getElementById("country").innerHTML = `Country : ${country}`;

      // prefix data
      let prefix = data.country.prefix;
      document.getElementById("prefix").innerHTML = `Prefix : ${prefix}`;

      // international format data
      let international_format = data.format.international;
      document.getElementById("international_format").innerHTML = `International format : ${international_format}`;

      // local format data
      let local_format = data.format.local;
      document.getElementById("local_format").innerHTML = `Local format : ${local_format}`;

      // service provider data
      let carrier = data.carrier;
      document.getElementById("carrier").innerHTML = `Carrier : ${carrier}`;

      // user type data
      let type = data.type;
      document.getElementById("type").innerHTML = `Type : ${type}`;


      return data;
    } 
    catch (error) {
      document.getElementById("error").innerHTML = `Check your internet connection , ${error.message}` 
      console.log(error.message);
     }
    
  };
  verify();