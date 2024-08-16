const el = document.querySelector(".slides");

var wrapper = document.createElement("div");

// insert wrapper before el in the DOM tree

el.parentNode.insertBefore(wrapper, el);

// move el into wrapper

wrapper.appendChild(el);

wrapper.id = "slider";

/*

<div id="slider">
   <div class="slides">
   <div class="slider slide">
      <img class="image"/>
   </div>
   <div class="slider slide">
      <img class="image"/>
   </div>
   <div class="slider slide">
      <img class="image"/>
   </div>
   </div>
</div>
*/
