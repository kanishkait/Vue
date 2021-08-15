<template>
  <div class="main">
    
     
      <section class="banner">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval=5000>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/public/images/car1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="/public/images/car2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="/public/images/car3.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <img src="/public/images/about.jpg" alt="" /> 
                  <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                      <span class="block">
                          Want to be millionaire ?
                      </span>
                      <span class="block text-indigo-500">
                          It&#x27;s today or never.
                      </span>
                  </h2>
                  <p class="text-xl mt-4 text-gray-400">
                      I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
                  </p>
                  <div class="lg:mt-0 lg:flex-shrink-0">
                      <div class="mt-12 inline-flex rounded-md shadow">
                          <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Get started
                          </button>
                      </div>
                  </div>
            </div>
            <div class="col-sm-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45447424942!2d75.72376073321803!3d22.723911728845497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1628966457883!5m2!1sen!2sin" width="500" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section class="our">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 tilt" v-for="gallery in gallery" :key="gallery">
              <div class="content">
                <div class="image">
                  <img v-bind:src="'/public/images/' + gallery.image" alt="feature1" /> 
                </div>
                <div class="content-box">
                  <img src="/public/images/logof.png" alt="feature1" /> 
                  <h4>{{gallery.heading}}</h4>
                  <h6>{{gallery.text}}</h6>
                </div>
              </div>
            </div>
            <!-- <div class="col-sm-4 tilt">
              <div class="content">
                <div class="image">
                  <img src="/public/images/feature2.jpg" alt="feature1" /> 
                </div>
                <div class="content-box">
                  <img src="/public/images/logof.png" alt="feature1" /> 
                  <h4>RANGE ROVER - VOGUE</h4>
                  <h6>MATTE-METALLIC: BLUE</h6>
                </div>
              </div>
            </div>
           <div class="col-sm-4 tilt">
              <div class="content">
                <div class="image">
                  <img src="/public/images/feature3.jpg" alt="feature1" /> 
                </div>
                <div class="content-box">
                  <img src="/public/images/logof.png" alt="feature1" /> 
                  <h4>RANGE ROVER - VOGUE</h4>
                  <h6>MATTE-METALLIC: BLUE</h6>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </section>

     <!-- <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="flex-item bg-one tilt">
              <a href="#nothing"> <span>3D Card</span> </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="flex-item bg-two tilt">
              <a href="#nothing"> <span>3D Card</span> </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="flex-item bg-one tilt">
              <a href="#nothing"> <span>3D Card</span> </a>
            </div>
          </div>
        </div>
      </div>
     </section> -->
      
      <section class="features">
        <div class="container">
          <div class="mb-16 text-center">
              <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Features
              </h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  A better way to live
              </p>
          </div>
          <div class="flex flex-wrap my-12 dark:text-white">
              <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 tilt" v-for="block in block" :key="block" >
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          {{block.heading}}
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      {{block.para}}
                  </p>
              </div>
              <!-- <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 tilt" >
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Overlays
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      Apply beautiful overlays to every product image distributed through our platform. A visual touch.
                  </p>
              </div>
              <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8 tilt">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Control
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      Apply filters and control which products to sell on each sales channel. E.g. exclude products with low margins.
                  </p>
              </div>
              <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8 tilt">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Mapping
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      Map product categories with each sales channels&#x27; own categories and achieve better results and lower costs.
                  </p>
              </div>
              <div class="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8 tilt">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Fill the missing
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      Modify products with extra properties and achieve the maximum output for each installed sales channel.
                  </p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 p-8 tilt">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Dynamic Texts
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      Build unique product titles and descriptions instead of spending days manually editing each product.
                  </p>
              </div> -->
          </div>
        </div>
      </section>
        <section class="our">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 tilt" v-for="images in images" :key="images">
              <div class="content">
                <div class="image">
                  <img v-bind:src="'/public/images/' + images.image" alt="feature1" /> 
                </div>
                <div class="content-box">
                
                  <h4>{{images.heading}}</h4>
                  <h6>{{images.text}}</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-4"></div>
             <div class="col-sm-4 tilt">
              <div class="content">
                <div class="image">
                  <img src="/public/images/feature2.jpg" alt="feature1" /> 
                </div>
                <div class="content-box">
                  <h4>RANGE ROVER - VOGUE</h4>
                  <h6>MATTE-METALLIC: BLUE</h6>
                </div>
              </div>
            </div>
           <!--<div class="col-sm-4 tilt">
              <div class="content">
                <div class="image">
                  <img src="/public/images/feature3.jpg" alt="feature1" /> 
                </div>
                <div class="content-box">
                  <img src="/public/images/logof.png" alt="feature1" /> 
                  <h4>RANGE ROVER - VOGUE</h4>
                  <h6>MATTE-METALLIC: BLUE</h6>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <section class="colour">
        <div class="container">
          <h2 class="text-center">COLOUR OPTIONS</h2>
          <div class="row">
            <div class="col-sm-12">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">
                    DIMOND
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false">
                    SPECIAL EFFECTS
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-3-tab" data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" aria-controls="pills-3" aria-selected="false">
                    COLOUR FLOW
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false">
                    CONFORM CHROME
                  </button>
                </li>
               
              </ul>
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link " id="pills-5-tab" data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" aria-controls="pills-5" aria-selected="true">
                    DIMOND
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-6-tab" data-bs-toggle="pill" data-bs-target="#pills-6" type="button" role="tab" aria-controls="pills-6" aria-selected="false">
                    SPECIAL EFFECTS
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-7-tab" data-bs-toggle="pill" data-bs-target="#pills-7" type="button" role="tab" aria-controls="pills-7" aria-selected="false">
                    COLOUR FLOW
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-8-tab" data-bs-toggle="pill" data-bs-target="#pills-8" type="button" role="tab" aria-controls="pills-8" aria-selected="false">
                    CONFORM CHROME
                  </button>
                </li>
               
              </ul>
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link " id="pills-9-tab" data-bs-toggle="pill" data-bs-target="#pills-9" type="button" role="tab" aria-controls="pills-9" aria-selected="true">
                    DIMOND
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-10-tab" data-bs-toggle="pill" data-bs-target="#pills-10" type="button" role="tab" aria-controls="pills-10" aria-selected="false">
                    SPECIAL EFFECTS
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-11-tab" data-bs-toggle="pill" data-bs-target="#pills-11" type="button" role="tab" aria-controls="pills-11" aria-selected="false">
                    COLOUR FLOW
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-12-tab" data-bs-toggle="pill" data-bs-target="#pills-12" type="button" role="tab" aria-controls="pills-12" aria-selected="false">
                    CONFORM CHROME
                  </button>
                </li>
               
              </ul>
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link " id="pills-13-tab" data-bs-toggle="pill" data-bs-target="#pills-13" type="button" role="tab" aria-controls="pills-13" aria-selected="true">
                    DIMOND
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-14-tab" data-bs-toggle="pill" data-bs-target="#pills-14" type="button" role="tab" aria-controls="pills-14" aria-selected="false">
                    SPECIAL EFFECTS
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-15-tab" data-bs-toggle="pill" data-bs-target="#pills-15" type="button" role="tab" aria-controls="pills-15" aria-selected="false">
                    COLOUR FLOW
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-16-tab" data-bs-toggle="pill" data-bs-target="#pills-16" type="button" role="tab" aria-controls="pills-16" aria-selected="false">
                    CONFORM CHROME
                  </button>
                </li>
               
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                  <div class="row">
                    <div class="col-sm-2">
                      <div class="button-content red">
                        <h6 class="text">Text</h6>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="button-content voilet">
                        <h6 class="text">Text</h6>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="button-content green">
                        <h6 class="text">Text</h6>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="button-content yellow">
                        <h6 class="text">Text</h6>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="button-content red">
                        <h6 class="text">Text</h6>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div class="button-content red">
                        <h6 class="text">Text</h6>
                      </div>
                      
                    </div>
                  </div>
                  <p> Combining performance, versatility and convenience, these multi-layered films incorporate colour and clear protective layers. They provide a smooth, attention grabbing finish that’s both durable and dazzling.</p>
                </div>
                <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                
                </div>
                <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                
                </div>
                <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="price">
        <div class="container">
          <h2 class="text-center">PRICING GUIDE</h2>
          <div class="row">
            <div class="col-sm-12">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">
                    <img src="/public/images/1.jpg" alt="1">
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false">
                    <img src="/public/images/2.jpg" alt="1">
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-3-tab" data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" aria-controls="pills-3" aria-selected="false">
                    <img src="/public/images/2.jpg" alt="1">
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="false">
                    <img src="/public/images/2.jpg" alt="1">
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-5-tab" data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" aria-controls="pills-5" aria-selected="false">
                    <img src="/public/images/2.jpg" alt="1">
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-6-tab" data-bs-toggle="pill" data-bs-target="#pills-6" type="button" role="tab" aria-controls="pills-6" aria-selected="false">
                    <img src="/public/images/3.jpg" alt="1">
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                

                </div>
                <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                
                </div>
                <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                
                </div>
                <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                
                </div>
                <div class="tab-pane fade" id="pills-5" role="tabpanel" aria-labelledby="pills-5-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                
                </div>
                <div class="tab-pane fade" id="pills-6" role="tabpanel" aria-labelledby="pills-6-tab">
                  <h2 class="text-center">WAGON - 4 DOORS</h2>
                  <div class="tab-content-inner">
                    <div>
                      <p class="text-center">Make</p>
                      <select id="make" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="make">
                            <option value="">
                                Select an option
                            </option>
                            <option value="dog">
                                Dog
                            </option>
                            <option value="cat">
                                Cat
                            </option>
                            <option value="hamster">
                                Hamster
                            </option>
                            <option value="parrot">
                                Parrot
                            </option>
                            <option value="spider">
                                Spider
                            </option>
                            <option value="goldfish">
                                Goldfish
                            </option>
                      </select>
                    </div>
                    <div>
                      <p class="text-center">Model</p>
                      <input type="text" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Model"/>
                    </div>
                    <div>
                      <p class="text-center">Year</p>
                      <select id="year" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="year">
                              <option value="">
                                  Select an option
                              </option>
                              <option value="dog">
                                  Dog
                              </option>
                              <option value="cat">
                                  Cat
                              </option>
                              <option value="hamster">
                                  Hamster
                              </option>
                              <option value="parrot">
                                  Parrot
                              </option>
                              <option value="spider">
                                  Spider
                              </option>
                              <option value="goldfish">
                                  Goldfish
                              </option>
                      </select>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      

  </div>
</template>

<script>


export default {
  name: 'Home',
  data(){
    return{
      features:[
        {id:1, header:'Header Title One', body:'Body text', footer:'Footer text'},
        {id:2, header:'Header Title two', body:'Body text', footer:'Footer text'},
        {id:3, header:'Header Title three', body:'Body text', footer:'Footer text'},
      ],
      items:[
        {id:1, header:'Header Title One', body:'Body text', footer:'Footer text'},
        {id:2, header:'Header Title two', body:'Body text', footer:'Footer text'},
        {id:3, header:'Header Title three', body:'Body text', footer:'Footer text'},
      ],
      gallery:[

        {id:1, image:"feature1.jpg",heading:'RANGE ROVER - VOGUE',text:'MATTE-METALLIC: BLUE'},
        {id:2, image:"feature2.jpg",heading:'RANGE ROVER - VOGUE',text:'MATTE-METALLIC: BLUE'},
        {id:3, image:"feature3.jpg",heading:'RANGE ROVER - VOGUE',text:'MATTE-METALLIC: BLUE'},
      ],
      block:[

        {id:1, heading:'Increase sales',para:'Receive more sales by selling across multple sales channels instead of just having a single point of entry.'},
        {id:2, heading:'Increase sales',para:'Receive more sales by selling across multple sales channels instead of just having a single point of entry.'},
        {id:3, heading:'Increase sales',para:'Receive more sales by selling across multple sales channels instead of just having a single point of entry.'},
        {id:4, heading:'Increase sales',para:'Receive more sales by selling across multple sales channels instead of just having a single point of entry.'},
        {id:5, heading:'Increase sales',para:'Receive more sales by selling across multple sales channels instead of just having a single point of entry.'},
        {id:6, heading:'Increase sales',para:'Receive more sales by selling across multple sales channels instead of just having a single point of entry.'},
      ],
      images:[

        {id:1, image:"feature1.jpg",heading:'RANGE ROVER - VOGUE',text:'MATTE-METALLIC: BLUE'},
        {id:2, image:"feature2.jpg",heading:'RANGE ROVER - VOGUE',text:'MATTE-METALLIC: BLUE'},
        {id:3, image:"feature3.jpg",heading:'RANGE ROVER - VOGUE',text:'MATTE-METALLIC: BLUE'},
        

      ],
    }

    
  }

}


</script>
