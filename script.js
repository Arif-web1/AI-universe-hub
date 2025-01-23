const all_mobile_data = async () => {
  const mobile_data = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const response = await mobile_data.json();
  const data = response.data;
  // console.log(data);
  all_data_show(data.tools);
};

const all_data_show = (data) => {
//   console.log(data);
  const card_div = document.getElementById("card-div");
  const main_div = document.getElementById("main-div");

  data.forEach((data_element) => {
    const new_div=document.createElement('div');
    new_div.innerHTML = `
         <div id="" class="bg-white rounded-lg shadow-lg w-[487px] h-[617px]">
          <!-- Image Section -->
     <div class="flex justify-center items-center" id="">
        <img
        class="rounded-t-lg object-cover w-[437px] h-[300px] mt-8 rounded-lg "
        src="${data_element.image}"
      />
     </div>
          <!-- Content Section -->
          <div class="p-6">
            <h2 class="text-2xl  font-semibold mb-4">Features</h2>
            <ul class="list-decimal list-inside text-gray-700 space-y-1">
              <li>Natural language processing</li>
              <li>Contextual understanding</li>
              <li>Text generation</li>
            </ul>
            
            <!-- Footer Section -->
            <hr class="mt-6">

            <div class="mt-6">
              <!-- ChatGPT Label -->
              <span class="block text-gray-900 text-2xl font-medium mb-2">ChatGPT</span>
              <div class="flex justify-between items-center">
                <!-- Date Section -->
                <div class="flex items-center text-sm text-gray-600">
                  <!-- Calendar Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5 mr-2 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 2.25v1.5m7.5-1.5v1.5M3 9h18M4.5 6.75h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5V9a2.25 2.25 0 012.25-2.25z"
                    />
                  </svg>
                  11/01/2022
                </div>
                <!-- Arrow Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5 text-rose-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
    
    `;
    card_div.appendChild(new_div);
  });
};

all_mobile_data();
