const all_mobile_data = async () => {
  const mobile_data = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const response = await mobile_data.json();
  const data = response.data;
  // console.log(data.tools);
  all_data_show(data.tools);
};

const all_data_show = (data) => {
  //   console.log(data);
  const card_div = document.getElementById("card-div");
  const main_div = document.getElementById("main-div");

  data.forEach((data_element) => {
    const new_div = document.createElement("div");
    // console.log(data_element.id);
    
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
              <li>${data_element.features[0]}</li>
              <li>${data_element.features[1]}</li>
              <li>${data_element.features[2]}</li>
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
                  ${data_element.published_in}
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
               <div class="flex justify-center ">
      <button onclick="single_id(${(data_element.id)})" class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
        show details
      </button>
    </div>
            </div>
          </div>
         
        </div>
         
    
    `;
    card_div.appendChild(new_div);
  });
};

all_mobile_data();

const single_id = async (newid) => {
 const id= newid.toString().padStart(2, '0');
  
  const single_content = await fetch(
    ` https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const single_id = await single_content.json();
  const single_data=single_id.data;
  // console.log(single_data);
  modam_document(single_data);
};

const modam_document=(single_data)=>{
  console.log(single_data);
  const main_modam=document.getElementById('modam_main');
  main_modam.classList.remove('hidden');
  const modam_container=document.getElementById('container'); 
  const new_div=document.createElement('div');
  new_div.classList=`relative bg-white w-[1272px] h-[789px]  flex justify-center items-center rounded-xl shadow-lg  gap-5`;
  new_div.innerHTML=`
   <button class="absolute top-2 right-2 text-red-500 hover:text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
  
      <!-- Left Section -->
      <div class=" border w-[487px] h-[511px] rounded-2xl ps-4 border-red-200 bg-red-50">
        <p class="font-semibold text-2xl text-gray-900 mb-4 p-4">
         ${single_data.description}
        </p>
        <div class="flex justify-between mb-4 mt-6 px-4">
          <div class="bg-white text-green-600 text-center  rounded-md shadow-md w-32 h-24 flex flex-col justify-center items-center ">
            <p class="text-lg font-semibold">$10/</p> 
            <p class="text-lg" id="">month</p>
            <p class="text-lg">Basic</p>
          </div>
          <div class="bg-white text-orange-600 text-center p-2 rounded-md shadow-md w-32 h-24 flex flex-col justify-center items-center">
            <p class="text-font-semibold  text-lg">$50/</p> 
            <p class=" text-lg" id="">month</p>
            <p class=" text-lg">Pro</p>
          </div>
          <div class="bg-white text-red-600 text-center p-2 rounded-md shadow-md  w-32 h-24 flex flex-col justify-center items-center">
            <p class="texm font-semibold text-lg">Contact us</p> 
            <p class=" text-lg" id="">month</p>
            <p class=" text-lg">Enterprise</p>
          </div>
        </div>
        <div class="flex gap-16 px-4">
          <div>
            <h3 class="font-semibold text-lg text-gray-800 mb-5">Features</h3>
            <ul class="text-base text-gray-600 list-disc pl-4">
              <li>${single_data.features[1].feature_name}</li>
              <li>${single_data.features[2].feature_name}</li>
              <li>${single_data.features[3].feature_name}</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-lg text-gray-800 mb-5">Integrations</h3>
            <ul class="text-base text-gray-600 list-disc pl-4">
              <li>FB Messenger</li>
              <li>Slack</li>
              <li>Telegram</li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Right Section -->
      <div class=" w-[487px] h-[511px] border rounded-2xl p-4 border-gray-200 bg-gray-50">
        <div class="flex justify-center mb-4">
          <img src="${single_data.image_link[0]}" alt="ChatGPT Logo" class="rounded-lg w-[437px] h-[339px]">
        </div>
        <h3 class="text-center font-semibold text-lg text-gray-900 mb-2">
          Hi, how are you doing today?
        </h3>
        <p class="text-center text-lg text-gray-600">
          I'm doing well, thank you for asking. How can I assist you today?
        </p>
      </div>
  `
  modam_container.appendChild(new_div);
}

