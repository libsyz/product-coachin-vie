<template>

 <div class="framework-wrapper">
  <div class="framework-top">
    <div class="framework-phase"
    v-for="phase in phases"
    :key="phase.id"
    @mouseenter="hover(phase, true); applyFilter($event)"
    @mouseleave="hover(phase, false); removeFilter($event)"
    @click="setPhase(phase.id)"
    :class="{ active: phase.hover }"
    >
    <img class="framework-phase-image"
    :src="phase.imgUrl"

    alt="">
      <div class="framework-phase-details">
        <p class="framework-phase-name"> {{ phase.name }}</p>
        <p class="framework-phase-duration"> {{ phase.duration }}</p>
      </div>
    </div>
  </div>
  <div class="framework-content-wrapper">
    <div class="content-description">
      <div class="content-header">
        {{ currentPhase.name }}
      </div>
      <div class="content-details">
        <ul>
          <li v-for="detail in currentPhase.details"
              :key="detail.id"> {{ detail.content }}</li>
        </ul>
      </div>
    </div>
    <div class="content-deliverables">
      <div class="deliverables-header"> Key Deliverables </div>
      <ul class="deliverables-details">
        <li v-for="deliverable in currentPhase.deliverables"
            :key="deliverable.id"> {{ deliverable.content }}</li>
      </ul>
    </div>
    <img class="content-illustration" :src="currentPhase.illustration" alt="">
  </div>
</div>
</template>

<script>

  export default  {
    name: 'framework',
    mounted() {
      this.setPhase();
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
      setPhase(id = 0){
        this.currentPhase = this.phases[id];
      }
    },
    data () {
      return {
        currentPhase: {
          imgUrl: '',
          name: '',
          duration: '',
          hover: '',
          description: '',
          details: [],
          deliverables: [],
          illustraton: ''
        },
        phases: [{
          id: 0,
          imgUrl: require("./../assets/framework-component/compass.svg"),
          name: "Discover",
          duration: "1 week",
          hover: false,
          description: "During this phase we do this and that. Some of the things that we do include",
          details: [
          {content: "1 this is one of the things that we do"},
          {content: "1this is another of the things that we do"},
          {content: "1 and don't forget this other thing"},
          {content: "1 and finally this one. This one is key!"}
          ],
          deliverables: [
          {content: "1 One of the things we deliver is here"},
          {content: "1 another of the things we deliver, really cool"},
          {content: "1 this is a super cool thing we deliver bro"},
          {content: "1 What the hell, we also will deliver this."}
          ],
          illustration: require('./../assets/framework-component/discover-illustration.svg')
        },
        {
          id: 1,
          imgUrl: require("./../assets/framework-component/change.svg"),
          name: "Design",
          duration: "1 week",
          hover: false,
          description: "During this phase we do this and that. Some of the things that we do include",
          details: [
          {content: "2 this is one of the things that we do"},
          {content: "2 this is another of the things that we do"},
          {content: "2 and don't forget this other thing"},
          {content: "2 and finally this one. This one is key!"}
          ],
          deliverables: [
          {content: "2 One of the things we deliver is here"},
          {content: "2 another of the things we deliver, really cool"},
          {content: "2 this is a super cool thing we deliver bro"},
          {content: "2 What the hell, we also will deliver this."}
          ],
          illustration: require('./../assets/framework-component/design-illustration.svg')

        },
        {
          id: 2,
          imgUrl: require("./../assets/framework-component/sketch.svg"),
          name: "Develop",
          duration: "1 week",
          hover: false,
          description: "During this phase we do this and that. Some of the things that we do include",
          details: [
          {content: "3 this is one of the things that we do"},
          {content: "3 this is another of the things that we do"},
          {content: "3 and don't forget this other thing"},
          {content: "3 and finally this one. This one is key!"}
          ],
          deliverables: [
          {content: "3 One of the things we deliver is here"},
          {content: "3 another of the things we deliver, really cool"},
          {content: "3 this is a super cool thing we deliver bro"},
          {content: "3 What the hell, we also will deliver this."}
          ],
          illustration: require('./../assets/framework-component/develop-illustration.svg')
        },
        {
          id: 3,
          imgUrl: require("./../assets/framework-component/spyglass.svg"),
          name: "Implement",
          duration: "1 week",
          hover: false,
          description: "During this phase we do this and that. Some of the things that we do include",
          details: [
          {content: "4 this is one of the things that we do"},
          {content: "4 this is another of the things that we do"},
          {content: "4 and don't forget this other thing"},
          {content: "4 and finally this one. This one is key!"}
          ],
          deliverables: [
          {content: "4 One of the things we deliver is here"},
          {content: "4 another of the things we deliver, really cool"},
          {content: "4 this is a super cool thing we deliver bro"},
          {content: "4 What the hell, we also will deliver this."} ],
          illustration: require('./../assets/framework-component/implement-illustration.svg')
        }],

    }
  }
}

</script>

<style scoped>

.framework-wrapper {
  min-width: 600px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(126,87,88,.1),
              0 5px 15px rgba(0,0,0,.07);
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
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: top;
  min-height: 300px;
  background-color: #fff;
}

.content-description {
  display: flex;
  flex-direction: column;
  flex-grow: 1 33%;
  padding-left: 20px;
}

.content-deliverables {
  display: flex;
  flex-direction: column;
  flex-grow: 1 33%;
}

.content-header {
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 15px;
  padding-left: 20px;
}

.content-details {
  text-align: left;
  line-height: 30px;
}

.deliverables-header {
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 15px;
  padding-bottom: 15px;
  padding-left: 40px;
}

.deliverables-details {
  text-align: left;
  line-height: 30px;
  list-style: none;
}

.deliverables-details > li::before {
  content: "\2713"; /* Unicode bullet symbol */
  font-weight: bold;
  padding-right: 10px;
}

.phase-description-header {
  text-transform: uppercase;
}

.content-illustration {
  padding-right: 60px;
  padding-left: 40px;
  max-width: 300px;
  flex-grow: 1 33%;
}

@media(max-width: 922px) {
  .framework-content-wrapper {
    padding-bottom: 30px;
  }
}

@media(max-width: 576px) {
  .framework-wrapper {
    min-width: 300px;
    max-width: 500px;
  }

  .framework-content-wrapper {
    flex-direction: column;
    padding: 30px 0px;
  }

  .framework-top {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .framework-phase {
    width: 100px;
    margin-bottom: 20px;
  }

  .framework-phase-image {
    height: 30px;
  }

  .framework-phase-duration {
    display: none;
  }
  .content-illustration {
    display: none;
  }

}



</style>
