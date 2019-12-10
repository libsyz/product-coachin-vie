<template>

 <div class="framework-wrapper">
    <div class="framework-top">
      <div class="framework-phase"
            v-for="phase in phases"
            :key="phase.id"
            @mouseenter="hover(phase, true); applyFilter($event)"
            @mouseleave="hover(phase, false); removeFilter($event)"
            :class="{ active: phase.hover }"
            >
        <img class="framework-phase-image"
             :src="phase.imgUrl"

             alt="">
        <div class="framework-phase-details">
          <p class="framework-name">{{ phase.name }}</p>
          <p class="framework-duration">{{ phase.duration }}</p>
        </div>
      </div>
    </div>
    <div class="framework-content">
      <div class="content-phase-description">{{ setPhaseHeader(phases) }}</div>
      <div class="content-phase-deliverables"> Space for deliverables </div>
    </div>
  </div>
</template>

<script>

  export default  {
    name: 'framework',
    props: {
    }
    data () {
      return {
        phases: [
          {
            imgUrl: require("./../assets/framework-component/change.svg"),
            name: "Discover",
            duration: "1 week",
            hover: false,
            phaseDescription: "During this phase we do this and that. Some of the things that we do include",
            phaseDetails: [
              {detail: "this is one of the things that we do"},
              {detail: "this is another of the things that we do"},
              {detail: "and don't forget this other thing"},
              {detail: "and finally this one. This one is key!"}
            ],
            phaseDeliverables: [
              {deliverable: "One of the things we deliver is here"},
              {deliverable: "another of the things we deliver, really cool"},
              {deliverable: "this is a super cool thing we deliver bro"},
              {deliverable: "What the hell, we also will deliver this."}
            ]

          },
          {
            imgUrl: require("./../assets/framework-component/compass.svg"),
            name: "Design",
            duration: "1 week",
            hover: false,
            phaseDescription: "During this phase we do this and that. Some of the things that we do include",
            phaseDetails: [
              {detail: "this is one of the things that we do"},
              {detail: "this is another of the things that we do"},
              {detail: "and don't forget this other thing"},
              {detail: "and finally this one. This one is key!"}
            ],
            phaseDeliverables: [
              {deliverable: "One of the things we deliver is here"},
              {deliverable: "another of the things we deliver, really cool"},
              {deliverable: "this is a super cool thing we deliver bro"},
              {deliverable: "What the hell, we also will deliver this."}
            ]

          },
          {
            imgUrl: require("./../assets/framework-component/sketch.svg"),
            name: "Develop",
            duration: "1 week",
            hover: false,
            phaseDescription: "During this phase we do this and that. Some of the things that we do include",
            phaseDetails: [
              {detail: "this is one of the things that we do"},
              {detail: "this is another of the things that we do"},
              {detail: "and don't forget this other thing"},
              {detail: "and finally this one. This one is key!"}
            ],
            phaseDeliverables: [
              {deliverable: "One of the things we deliver is here"},
              {deliverable: "another of the things we deliver, really cool"},
              {deliverable: "this is a super cool thing we deliver bro"},
              {deliverable: "What the hell, we also will deliver this."}
            ]
          },
          {
            imgUrl: require("./../assets/framework-component/spyglass.svg"),
            name: "Implement",
            duration: "1 week",
            hover: false,
            phaseDescription: "During this phase we do this and that. Some of the things that we do include",
            phaseDetails: [
              {detail: "this is one of the things that we do"},
              {detail: "this is another of the things that we do"},
              {detail: "and don't forget this other thing"},
              {detail: "and finally this one. This one is key!"}
            ],
            phaseDeliverables: [
              {deliverable: "One of the things we deliver is here"},
              {deliverable: "another of the things we deliver, really cool"},
              {deliverable: "this is a super cool thing we deliver bro"},
              {deliverable: "What the hell, we also will deliver this."}
            ]
          }
        ]
      }
    },
    methods: {
      hover(phase, bool) {
        phase.hover = bool;
    },
      applyFilter(event) {
        event.target.children[0].style.filter = 'invert(83%)' + 'sepia(82%)' + 'saturate(356%)' +  'hue-rotate(15deg)' + 'brightness(90%)' + 'contrast(89%)';
    },
      removeFilter(event){
       event.target.children[0].style.filter = 'invert(100%)' + 'sepia(0%)' + 'saturate(7941%)' +  'hue-rotate(140deg)' + 'brightness(106%)' + 'contrast(102%)';
    },
      setPhaseHeader(phases,id = 0){
        return phases[id].phaseDescription
      }

  }
}


</script>

<style scoped>
  .framework-wrapper {
    height: 300px;
    border-radius: 4px;;
  }

  .framework-top {
    padding: 10px 20px;
    background-color: green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
  }

  .framework-phase {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
  }
  .framework-phase-image {
    height: 50px;
    filter: invert(100%) sepia(42%) saturate(2%) hue-rotate(359deg) brightness(107%) contrast(101%);
  }

  .active {
    color: #bada55;
  }

  .framework-content {
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 300px;
    background-color: #fff;
  }

</style>
