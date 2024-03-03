const fetchApi = async () => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;

  const res = await fetch(url);
  const data = await res.json();

  data.posts.forEach((item) => {
    // console.log(item);
    DisplayCardInnerHtml(item);

    
  });
};

const displayCard=async()=>{
  const displayCard=document.getElementById('display_card_2');

  const url=`https://openapi.programming-hero.com/api/retro-forum/latest-posts`;

  const res=await fetch(url);
  const data=await res.json();
  data.forEach(item=>{
    const div=document.createElement('div');
    
    div.innerHTML=`
            <div class="p-3 border-2 rounded-2xl">
              <div class="card">
                <figure><img src="${item.cover_image}" /></figure>

                <div class="card-body space-y-3">
                  <!-- date -->
                  <div class="text-gray-400">
                    <i class="bx bx-calendar-minus"></i>
                    ${item?.author?.posted_date||'No publish date'
                    }
                  </div>

                  <h2 class="card-title">${item.title
                  }</h2>

                  <p>${item.description
                  }</p>

                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-slate-200">
                      <img src="${item.profile_image
                      }" alt="" class="rounded-full"/>
                    </div>

                    <div>
                      <h6 class="font-bold">${item.author.name}</h6>
                      <p class="text-gray-400 text-sm">${item.author?.designation||'Unknown'
                      }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
    `

    displayCard.appendChild(div)
  })
}

displayCard()

fetchApi();
