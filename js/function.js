const display = document.getElementById("display");

const DisplayCardInnerHtml = (item) => {
  const createDiv = document.createElement("div");
  createDiv.classList = "";

  // console.log(createDiv);
  createDiv.innerHTML = `
  <div class="">
    <div class="bg-gray-200 p-8 rounded-2xl">
      <!-- category+ title+ img-->
      <div class="flex gap-6">
        <div class="relative  rounded-xl w-20 h-16">
          <img src="${item.image}" alt="" />
          <div class="absolute w-2 h-2 md:w-4 md:h-4 rounded-full bg-green-600 -top-1 -right-1"></div>
        </div>

        <div class="space-y-3">
          <div class="flex gap-5">
            <p class="font-semibold text-sm">#<span>${item.category}</span></p>
            <p class="font-semibold text-sm">Author: <span>${item.author.name}</span></p>
          </div>

          <h3 class="text-lg lg:text-2xl font-bold">${item.title}</h3>

          <p>${item.description}</p>
        </div>
      </div>

      <div class="border-b border-dashed border-gray-400 my-3 w-[90%] ml-auto"></div>
          <!-- Message/view/watch -->
          <section class="flex justify-between w-[90%] ml-auto">
            <div class="text-sm flex gap-3">
              <div class="flex items-center gap-1">
                <i class="bx bx-comment-dots"></i>
                <p>${item.comment_count}</p>
              </div>

              <div class="flex items-center gap-1">
                <i class="bx bx-show"> </i>
                <p>${item.view_count}</p>
              </div>

              <div class="flex items-center gap-1">
                <i class="bx bx-time"> </i>
                <p>${item.posted_time} min</p>
              </div>
            </div>

            <div>
              <i class="bx bx-message-alt rotate-180 bg-green-400 px-2 py-1 text-white text-lg rounded-full"></i>
            </div>
          </section>
    </div>
  </div>
  `;

  display.appendChild(createDiv);
};

const search = async () => {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  const searchField = document.getElementById("search_field");
  const searchText = searchField.value;

  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`;

  const res = await fetch(url);
  const data = await res.json();
  const category = data.posts;

  setTimeout(() => {
    display.innerHTML = ``;
    spinner.classList.add("hidden");
  }, 2000);

  category.forEach((item) => {
    setTimeout(function () {
      DisplayCardInnerHtml(item);
    }, 2000);
  });
};
