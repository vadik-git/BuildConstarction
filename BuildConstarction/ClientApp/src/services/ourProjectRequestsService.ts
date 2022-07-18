import axios from "axios";

const getAllOurProjects = () => {
    axios.get("/api/OurProject/GetAll")
        .then((resp) => {

            console.log("responce", resp.data)
        })
}

export default {
    getAllOurProjects
}