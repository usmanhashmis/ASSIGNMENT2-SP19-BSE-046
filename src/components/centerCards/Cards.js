import React from "react";

import './Cards.css'

const Cards = () => {
  return (
    <div>
     <section class="py-5">
    <div class="container">
    
        <div class="row">
            <div class="col-lg-3 mx-auto">
                <header class="text-left pb-5">
                    <h1 class="h2">Famous Quote</h1>
                </header>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 mx-auto">

                
                <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                    <p class="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" class="text-info">@consequat</a>."</p>
                    <footer class="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

            </div>

        <div class="col-lg-4 mx-auto">                
        <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
            <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
            <p class="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" class="text-info">@consequat</a>."</p>
            <footer class="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                <cite title="Source Title">Source Title</cite>
            </footer>
        </blockquote>
        </div>

        <div class="col-lg-4 mx-auto">       
        <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
            <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
            <p class="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" class="text-info">@consequat</a>."</p>
            <footer class="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                <cite title="Source Title">Source Title</cite>
            </footer>
        </blockquote>

        </div>
        </div>
    </div>
</section>
    </div>
  );
};
export default Cards;
