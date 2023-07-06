import SearchBar from "../searchBar/SearchBar"
function Nav () {
    return (
       <div>
          <SearchBar onSearch={(characterID) => alert(characterID)} />
       </div>
    );
 }

 export default Nav;