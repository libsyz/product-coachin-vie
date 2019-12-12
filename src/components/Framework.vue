<template>

 <div class="framework-wrapper">
  <div class="framework-top">
    <div class="framework-phase"
    v-for="phase in phases"
    :key="phase.id"
    @mouseenter="hover(phase, true); applyFilter($event)"
    @mouseleave="hover(phase, false); removeFilter($event)"
    @click="changeHeader(); changeDeliverables()"
    :class="{ active: phase.hover }"
    >
    <img class="framework-phase-image"
    :src="phase.imgUrl"

    alt="">
      <div class="framework-phase-details">
        <p class="framework-phase-name">{{ phase.name }}</p>
        <p class="framework-phase-duration">{{ phase.duration }}</p>
      </div>
    </div>
  </div>
  <div class="framework-content">
    <div class="content-phase-description">{{ currentPhase }}</div>
    <div class="content-phase-deliverables">
      <ul>
        <li v-for="deliverable in currentDeliverables"
            :key="deliverable.id"> {{ deliverable }}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

  export default  {
    name: 'framework',
    mounted() {
    },
    props: {
      currentPhase:
      {
        type: String,
        default: "The Value"
      },
      currentDeliverables:
      {
        type: Array,
        default: () => ["This is a value", "This is another value"]
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
      setPhase(phase) {
        return phase.name;
      },
      setDeliverables(phase) {
        return phase.name;
      },
      changeHeader() {
        this.currentPhase = "hello!"
      },
      changeDeliverables() {
        this.currentDeliverables = ["1", "2", "3"]
      }
    },
    computed: {
      setDefaultHeader: function() {
        return this.phases[0].name
      }
    },
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
          {deliverable: "What the hell, we also will deliver this."} ]
        }]
    }
  }
}

</script>

<style scoped>

.framework-wrapper {
  min-width: 600px;
  border-radius: 4px;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
              0 2px 2px 0 rgba(40, 44, 53, 0.08);
}

.framework-top {
  padding: 25px 30px;
  background-color: rgb(30, 30, 30);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  border-radius: 3px 3px 0px 0px;
}

.framework-phase {
  display: flex;
  justify-content: space-around;
  align-items: top;
  text-align: left;
  margin-right: 40px;
}
.framework-phase-image {
  height: 50px;
  margin-right: 10px;
  filter: invert(100%) sepia(42%) saturate(2%) hue-rotate(359deg) brightness(107%) contrast(101%);
}

.active {
  color: #bada55;
}

.framework-phase-name {
  margin-top: 0px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.framework-phase-duration {
  margin-top: 0px;
  margin-bottom: 0px;
}

.framework-content {
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 300px;
  background-color: #fff;
}

</style>
