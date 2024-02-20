
const getDetail = async (alpha3Code) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`);
        const result = await res.json();
        return result
    } catch (error) {
        console.log(error)
    }
}

const fetchCountryAndNeighbours = async () => {
    const colambia = await getDetail("col")
    const neighbours = await Promise.all(
        colambia.borders.map((border) => getDetail(border))
    );
    
    console.log(neighbours)
};

fetchCountryAndNeighbours();

