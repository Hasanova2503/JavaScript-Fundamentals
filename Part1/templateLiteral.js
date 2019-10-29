// 6. Template Literals : useful for writing html and js simulataneously


const name = 'Rajat';
const age = '24';
const job = 'coder';
const city = 'delhi';

// without template literals

let html;

html = '<ul><li>Name: '+ name+ '</li><li>Age: '+ age + '</li><li>Job: '+ job + 
'</li><li>City:' + city + '</li></ul>';





// with template literals


var hello = () => {

  return 'hello rajat';
}

html = `

     <ul>
       <li>Name: ${name}</li>
       <li>Job: ${job}</li>
       <li>Age: ${age}</li>
       <li>City: ${city}</li>
       <li>${2+2}</li>
       <li>${hello()}</li>
      </ul>    
     
     `;

 document.body.innerHTML = html;
