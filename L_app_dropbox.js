import {Dropbox} from 'dropbox';

/* 
    The next page show us the dropbox objetcts that are allowed to use
    https://dropbox.github.io/dropbox-sdk-js/Dropbox.html
*/
const dbx = new Dropbox({  
    accessToken: '1ZhYkWaJHuAAAAAAAAAB14dgEET1mcwq_3Pss07QHWOBGMscnEfJ3AV70177uuAY', /* An access token for making authenticated requests */
    fetch  /* fetch library for making requests */
  })

  dbx.filesListFolder({  
    path: ''  
  }).then(res => console.log(res))

  document.getElementById("entre").innerHTML="Hell yeah, entré"