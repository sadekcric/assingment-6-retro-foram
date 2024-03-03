


const fetchApi=async()=>{
  const url=`https://openapi.programming-hero.com/api/retro-forum/posts`;
  
  
  const res=await fetch(url);
  const data=await res.json();
  
  data.posts.forEach(item=>{
    // console.log(item);
    DisplayCardInnerHtml(item)
    
    
  })

  
}



fetchApi()