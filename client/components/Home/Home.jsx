import Top10 from "./Top10";
import SearchArticle from "./SearchArticle";
import React from "react";

function Home(){

return (
<main>
        
        
         <h1>One Stop Shop for Wikipedia MetaData</h1>
         <h2>Trending Articles</h2>
        <Top10/>
        <div>
         <SearchArticle/>
         </div>
        
 </main>
)

}

export default Home;