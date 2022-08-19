const axios=require("axios");

axios.get(
    "http://localhost:3000/"
)
.then(result=> console.log(result.data))