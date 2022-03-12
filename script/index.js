import getData from "./utils/getData";



const URL_CHARACTERS = "http://localhost:3000";

const showData = async (data) => {
    if(!data) {
        data = await getData(URL_CHARACTERS);
    }

    data.forEach((element) => {

    } )
}