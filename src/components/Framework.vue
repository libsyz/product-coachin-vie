<template>

 <div class="framework-wrapper">
  <div class="framework-top">
    <div class="framework-phase"
    v-for="phase in phases"
    :key="phase.id"
    @mouseenter="hover(phase, true); applyFilter($event)"
    @mouseleave="hover(phase, false); removeFilter($event)"
    @click="changeHeader(phase.name); changeDeliverables(phase.phaseDetails)"
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
  <div class="framework-content-wrapper">
    <div class="content-description">
      <div class="content-header">
        {{ currentPhase }}
      </div>
      <div class="content-details">
        <ul>
          <li v-for="detail in currentPhaseDetails"
              :key="detail.id"> {{ detail.content }}</li>
        </ul>
      </div>
    </div>
    <div class="content-deliverables">
      <ul>
        Key deliverables
        <li v-for="deliverable in currentDeliverables"
            :key="deliverable.id"> {{ deliverable.detail }}</li>
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
      currentPhaseDetails: {
        type: Array,
        default: () => [
          { content: "hello" },
          { content: "what is up"}
        ]
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
        event.target.children[0].style.filter = 'invert(34%)' + 'sepia(30%)' + 'saturate(2565%)' +  'hue-rotate(218deg)' + 'brightness(114%)' + 'contrast(104%)';
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
      changeHeader(id) {
        this.currentPhase = `${id}`
      },
      changeDeliverables(array) {
        this.currentDeliverables = array
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
  background-color: #282828;
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
  cursor: pointer;
}

.framework-phase-image {
  height: 50px;
  margin-right: 10px;
  filter: invert(100%) sepia(42%) saturate(2%) hue-rotate(359deg) brightness(107%) contrast(101%);
}

.active {
  color: #6C63FF;
}

.framework-phase-name {
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.framework-phase-duration {
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}

.framework-content-wrapper {
  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 300px;
  background-color: #fff;
}

.content-header {

}

.content-details {

}

.content-deliverables {

}

.phase-description-header {
  text-transform: uppercase;

}

</style>
