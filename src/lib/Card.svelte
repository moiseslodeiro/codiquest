<script>
    // className={(isFlipped ? "flipped" : "" ) + " flip-card" }
    // onClick={()=> setIsFlipped(!isFlipped)}
    let flipped = false;
    </script>
    
<!--       <main class:flipped on:click="{() => flipped = !flipped}">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              cara A
            </div>
            <div class="flip-card-back">
              Cara B
            </div>
          </div>
        </div>
      </main>
     -->




    
      <div class="card" href="#">
        <div class="card-body">
          <h2 class="card-front">
            Card With Longer Content
          </h2>
    
          <p class="card-back">
            Longer but fully supported content. This card is now sized vertically by both its front and back faces — whichever happens to be the taller. We now have both front and back face in flow, and we don’t have any of the layout issues present when using absolute positioning. Some light flex positioning allows cards with shorter content to be aligned as desired.
            Longer but fully supported content. This card is now sized vertically by both its front and back faces — whichever happens to be the taller. We now have both front and back face in flow, and we don’t have any of the layout issues present when using absolute positioning. Some light flex positioning allows cards with shorter content to be aligned as desired.

          </p>
        </div>
      </div>
    
    




    <style>





:root {
	 --time: 0.707s;
}
 .cards {
	 display: grid;
}
 .card {
	 perspective: 40rem;
}
 .card-body {
	 display: flex;
	 transform-style: preserve-3d;
	 transition: var(--time) transform;
}
 .card:hover .card-body, .card:focus .card-body {
	 transform: rotateX(-180deg);
}
 .card-front, .card-back {
	 backface-visibility: hidden;
	 min-width: 100%;
}
 .card-back {
	 transform: rotateX(-180deg) translate(-100%, 0);
}
/* Make it Pretty */

 .cards {
	 grid-gap: 1.5rem;
	 grid-auto-rows: 1fr;
	 padding: 3rem;
	 background: whitesmoke;
	 grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
 .card {
	 display: flex;
	 transition: z-index, transform calc(var(--time) / 4);
	 transition-delay: var(--time), 0s;
	 text-decoration: none;
	 color: inherit;
	 z-index: 0;
}
 .card:hover {
	 transition-delay: 0s;
	 z-index: 1;
}
 .card:active {
	 transform: scale(0.975);
}
 .card-body {
	 border-radius: 0.25rem;
	 flex: 1;
}
 .card-front, .card-back {
	 display: flex;
	 align-items: center;
	 background-color: white;
	 box-sizing: border-box;
	 padding: 1.5rem;
	 border-radius: 0.25rem;
}
 .card-front {
	 font-size: 1.5rem;
}









      /* Flip card toggle */
      .flip-card {
        background-color: transparent;
        width: 240px;
        height: 360px;
        perspective: 1000px;
        cursor: pointer;
        user-select: none;
      }
    
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }
    
      .flipped .flip-card .flip-card-inner {
        transform: rotateX(180deg) translate(-100%, 0);
      }
    
      .flip-card-front,
      .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
    
      .flip-card-front {
        background-color: #bbb;
        color: black;
      }
    
      .flip-card-back {
        background-color: #2980b9;
        transform: rotateY(180deg);
      }
    </style>